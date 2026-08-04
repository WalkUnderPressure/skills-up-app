import {
  SourceFile,
  CallExpression,
  SyntaxKind,
  Node,
  ArrowFunction,
  FunctionExpression,
  MethodDeclaration,
} from 'ts-morph';

import { FeatureStateOpts } from '../types';

export function validateArgs(name: string, state: string): void {
  if (!name) {
    throw new Error('Error: Please specify feature flag name.');
  }
  if (state !== 'on' && state !== 'off') {
    throw new Error('Error: Feature state must be either "on" or "off".');
  }
}

/**
 * Checks if any of the target functions (toggleFeatures, useToggleFeatures)
 * are imported from the designated module paths.
 */
export function hasToggleFeaturesImport(
  sourceFile: SourceFile,
  importSources: string[],
  targetFunctions: readonly string[],
): boolean {
  return sourceFile.getImportDeclarations().some((importDecl) => {
    const moduleSpecifier = importDecl.getModuleSpecifierValue();
    const isMatchingSource = importSources.some((src) => moduleSpecifier.includes(src));

    if (!isMatchingSource) return false;

    return importDecl
      .getNamedImports()
      .some((namedImport) => targetFunctions.includes(namedImport.getName()));
  });
}

/**
 * Checks if a CallExpression is a call to `toggleFeatures(...)` or `useToggleFeatures(...)`
 */
export function isToggleFeaturesCall(
  callExpr: CallExpression,
  targetFunctions: readonly string[],
): boolean {
  const expression = callExpr.getExpression();
  return expression.isKind(SyntaxKind.Identifier) && targetFunctions.includes(expression.getText());
}

/**
 * Processes a single toggleFeatures / useToggleFeatures call node.
 */
export function processToggleCall(
  callExpr: CallExpression,
  targetFlagName: string,
  targetState: FeatureStateOpts,
  onSkip: (count?: number) => void,
): boolean {
  const objectArg = callExpr.getArguments()[0];

  if (!Node.isObjectLiteralExpression(objectArg)) {
    onSkip();
    return false;
  }

  const nameProp = objectArg.getProperty('name');
  if (!nameProp || !Node.isPropertyAssignment(nameProp)) {
    return false;
  }

  const nameInitializer = nameProp.getInitializer();
  if (
    !Node.isStringLiteral(nameInitializer) &&
    !Node.isNoSubstitutionTemplateLiteral(nameInitializer)
  ) {
    return false;
  }

  const flagName = nameInitializer.getLiteralValue();
  if (flagName !== targetFlagName) {
    return false;
  }

  const targetProp = objectArg.getProperty(targetState);
  if (!targetProp) {
    onSkip();
    return false;
  }

  const replacementText = extractValueText(targetProp, callExpr);

  if (replacementText === null) {
    onSkip();
    return false;
  }

  callExpr.replaceWithText(replacementText);
  return true;
}

function extractValueText(prop: Node, callExpr: CallExpression): string | null {
  if (Node.isPropertyAssignment(prop)) {
    const initializer = prop.getInitializer();
    if (!initializer) return null;

    if (Node.isArrowFunction(initializer) || Node.isFunctionExpression(initializer)) {
      return unwrapFunctionBody(initializer, callExpr);
    }

    return initializer.getText();
  }

  if (Node.isMethodDeclaration(prop)) {
    return unwrapFunctionBody(prop, callExpr);
  }

  if (Node.isShorthandPropertyAssignment(prop)) {
    return prop.getName();
  }

  return null;
}

function unwrapFunctionBody(
  fn: ArrowFunction | FunctionExpression | MethodDeclaration,
  callExpr: CallExpression,
): string | null {
  const body = fn.getBody();
  if (!body) return null;

  if (!Node.isBlock(body)) {
    return body.getText();
  }

  const statements = body.getStatements();
  if (statements.length === 0) return 'undefined';

  if (statements.length === 1) {
    const singleStmt = statements[0];
    if (Node.isReturnStatement(singleStmt)) {
      const expr = singleStmt.getExpression();
      return expr ? expr.getText() : 'undefined';
    }

    if (isExpressionStatementContext(callExpr)) {
      return singleStmt.getText();
    }
  }

  if (!isExpressionStatementContext(callExpr)) {
    return `(() => ${body.getText()})()`;
  }

  return body
    .getStatements()
    .map((s) => s.getText())
    .join('\n');
}

function isExpressionStatementContext(callExpr: CallExpression): boolean {
  return callExpr.getParent()?.isKind(SyntaxKind.ExpressionStatement) ?? false;
}
