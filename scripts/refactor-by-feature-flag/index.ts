import { Project, SyntaxKind } from 'ts-morph';

import {
  validateArgs,
  hasToggleFeaturesImport,
  processToggleCall,
  isToggleFeaturesCall,
} from './helpers';
import { FeatureStateOpts } from './types';

const FEATURE_FLAG_IMPORT_SOURCES = ['entities/FeatureFlags'];
const TARGET_FUNCTIONS = ['useToggleFeatures'] as const;

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
  // 1. Check if toggleFeatures or useToggleFeatures is imported from feature flag modules
  if (!hasToggleFeaturesImport(sourceFile, FEATURE_FLAG_IMPORT_SOURCES, TARGET_FUNCTIONS)) {
    return;
  }

  // 2. Collect target call expressions FIRST (snapshot) to avoid mutation issues during traversal
  const toggleCalls = sourceFile
    .getDescendantsOfKind(SyntaxKind.CallExpression)
    .filter((callExpr) => isToggleFeaturesCall(callExpr, TARGET_FUNCTIONS));

  toggleCalls.forEach((callExpr) => {
    const transformed = processToggleCall(callExpr, featureName, featureState, onSkip);
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
