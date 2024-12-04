import { Project } from 'ts-morph';

// Work with args
function getArgValue(argument: string) {
  const index = argument.indexOf('='); // Find the first '='
  const argValue = argument.slice(index + 1); // Rest after '='

  return argValue;
}

function getArgValueByName(args: Array<string>, argName: string) {
  const argument = args.find((arg) => arg.startsWith(`--${argName}=`));

  return argument ? getArgValue(argument) : '';
}

const OLD_ALIAS = getArgValueByName(process.argv, 'old') ?? '';
const NEW_ALIAS = getArgValueByName(process.argv, 'new') ?? '';

if (NEW_ALIAS === OLD_ALIAS) {
  console.info('New alias is equal to old one! Choose another alias name!');
}

console.info(`Start changing import from "${OLD_ALIAS}" to "${NEW_ALIAS}"`);

// Setup for change import aliases
const project = new Project({});

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx', 'config/storybook/**.ts']);

const files = project.getSourceFiles();

const isAbsoluteImport = (value: string) => {
  const LAYERS = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];

  const isAbsolute = LAYERS.some((layer) => {
    const absolutePath = [OLD_ALIAS, layer].filter(Boolean).join('/');

    return value.startsWith(absolutePath);
  });

  return isAbsolute;
};

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const importValue = importDeclaration.getModuleSpecifierValue();

    if (isAbsoluteImport(importValue)) {
      const newImportPath = [NEW_ALIAS, ...importValue.replace(OLD_ALIAS, '').split('/')]
        .filter(Boolean)
        .join('/');

      importDeclaration.setModuleSpecifier(newImportPath);
    }
  });
});

// Save applied changes
project
  .save()
  .then(() => {
    console.info(`Imports was changed from "${OLD_ALIAS}" to "${NEW_ALIAS}"`);
  })
  .catch(() => {
    console.error(
      `Something went wrong! Can't change imports from "${OLD_ALIAS}" to "${NEW_ALIAS}"`,
    );
  });
