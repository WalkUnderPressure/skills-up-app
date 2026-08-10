import { SourceFile, CallExpression, SyntaxKind, JsxSelfClosingElement } from 'ts-morph';

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

    if (!isMatchingSource) {
      return false;
    }

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
 * Checks if a JSX self-closing element is the target component (e.g. <ToggleFeatures />)
 */
export function isToggleFeaturesComponent(
  node: JsxSelfClosingElement,
  targetComponents: readonly string[],
): boolean {
  const tagName = node.getTagNameNode().getText();
  return targetComponents.includes(tagName);
}
