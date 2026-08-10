import { Project, SyntaxKind } from 'ts-morph';

import {
  validateArgs,
  hasToggleFeaturesImport,
  isToggleFeaturesCall,
  isToggleFeaturesComponent,
} from './helpers';
import { processToggleCall, processToggleComponent } from './helpers/process-toggle';
import { FeatureStateOpts } from './types';

const FEATURE_FLAG_IMPORT_SOURCES = ['entities/FeatureFlags'];
const TARGET_FUNCTIONS = ['useToggleFeatures'] as const;
const TARGET_COMPONENTS = ['ToggleFeatures'] as const;
const TARGET_FIELD_NAMES = {
  FUNCTIONS: 'feature',
  COMPONENTS: 'feature',
} as const;
const ALL_TARGET_IMPORTS = [...TARGET_FUNCTIONS, ...TARGET_COMPONENTS];

const featureName = process.argv[2];
const featureState = process.argv[3] as FeatureStateOpts;

validateArgs(featureName, featureState);

const project = new Project({});
project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);

const sourceFiles = project.getSourceFiles();
let totalTransformed = 0;
let totalSkipped = 0;

const onSkip = (skipCount?: number) => {
  if (skipCount !== undefined && skipCount > 0 && Number.isInteger(skipCount)) {
    totalSkipped += skipCount;
  } else {
    totalSkipped += 1;
  }
};

sourceFiles.forEach((sourceFile) => {
  const isFileHasImport = hasToggleFeaturesImport(
    sourceFile,
    FEATURE_FLAG_IMPORT_SOURCES,
    ALL_TARGET_IMPORTS,
  );

  // Check for either the hook or the component import
  if (!isFileHasImport) {
    return;
  }

  // Snapshot both call expressions and JSX elements before mutating
  const toggleCalls = sourceFile
    .getDescendantsOfKind(SyntaxKind.CallExpression)
    .filter((callExpr) => isToggleFeaturesCall(callExpr, TARGET_FUNCTIONS));

  const toggleComponents = sourceFile
    .getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement)
    .filter((el) => isToggleFeaturesComponent(el, TARGET_COMPONENTS));

  toggleCalls.forEach((callExpr) => {
    const transformed = processToggleCall({
      callExpr,
      targetFlagName: featureName,
      targetState: featureState,
      targetFieldName: TARGET_FIELD_NAMES.FUNCTIONS,
      onSkip,
    });

    if (transformed) {
      totalTransformed++;
    }
  });

  toggleComponents.forEach((el) => {
    const transformed = processToggleComponent({
      node: el,
      targetState: featureState,
      targetFlagName: featureName,
      targetFieldName: TARGET_FIELD_NAMES.COMPONENTS,
      onSkip,
    });

    if (transformed) {
      totalTransformed++;
    }
  });
});

project.saveSync();

console.info(
  [
    `✨ Refactoring by feature flag "${featureName}" done!`,
    `🛠️  Transformed: ${totalTransformed}.`,
    `⏭️  Skipped: ${totalSkipped}.`,
  ].join('\n'),
);
