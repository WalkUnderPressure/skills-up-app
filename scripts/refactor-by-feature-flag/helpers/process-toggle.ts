import {
  Node,
  SyntaxKind,
  CallExpression,
  ArrowFunction,
  FunctionExpression,
  MethodDeclaration,
  JsxSelfClosingElement,
  JsxAttribute,
} from 'ts-morph';

import { FeatureStateOpts } from '../types';

function getJsxAttribute(attributes: JsxAttribute[], name: string): JsxAttribute | undefined {
  return attributes.find((attr) => attr.getNameNode().getText() === name);
}

function extractJsxAttributeValueText(attr: JsxAttribute): string | null {
  const initializer = attr.getInitializer();
  if (!initializer) return null;

  if (Node.isStringLiteral(initializer)) {
    return initializer.getLiteralValue();
  }

  if (Node.isJsxExpression(initializer)) {
    const expression = initializer.getExpression();
    if (!expression) return null;

    if (Node.isParenthesizedExpression(expression)) {
      return expression.getExpression().getText();
    }

    return expression.getText();
  }

  return null;
}

type ProcessToggleComponentParams = {
  node: JsxSelfClosingElement;
  targetFlagName: string;
  targetState: FeatureStateOpts;
  targetFieldName: string;
  onSkip: (count?: number) => void;
};

/**
 * Processes a single <ToggleFeatures /> JSX node.
 */
export function processToggleComponent(params: ProcessToggleComponentParams): boolean {
  const { node, targetFlagName, targetState, targetFieldName, onSkip } = params;

  const attributes = node.getAttributes().filter(Node.isJsxAttribute);

  const featureAttr = getJsxAttribute(attributes, targetFieldName);
  const featureInitializer = featureAttr?.getInitializer();

  if (!featureInitializer || !Node.isStringLiteral(featureInitializer)) {
    return false;
  }

  if (featureInitializer.getLiteralValue() !== targetFlagName) {
    return false;
  }

  const targetAttr = getJsxAttribute(attributes, targetState);
  if (!targetAttr) {
    onSkip();
    return false;
  }

  const replacementText = extractJsxAttributeValueText(targetAttr);

  if (replacementText === null) {
    onSkip();
    return false;
  }

  node.replaceWithText(replacementText);
  return true;
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

type ProcessToggleCallParams = {
  callExpr: CallExpression;
  targetFlagName: string;
  targetFieldName: string;
  targetState: FeatureStateOpts;
  onSkip: (count?: number) => void;
};

/**
 * Processes a single toggleFeatures / useToggleFeatures call node.
 */
export function processToggleCall(params: ProcessToggleCallParams): boolean {
  const { callExpr, targetFlagName, targetState, targetFieldName, onSkip } = params;

  const objectArg = callExpr.getArguments()[0];

  if (!Node.isObjectLiteralExpression(objectArg)) {
    onSkip();
    return false;
  }

  const nameProp = objectArg.getProperty(targetFieldName);
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
