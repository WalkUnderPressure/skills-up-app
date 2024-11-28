import fs from 'fs/promises';

import createSchemaTypeName from '../helpers/createSchemaTypeName';
import resolveRoot from '../helpers/resolveRoot';

const createPublicApi = async (layer: string, sliceName: string) => {
  const schemaName = createSchemaTypeName(sliceName);
  const componentName = sliceName;

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      ` export { default as ${componentName} } from './ui/${componentName}';
        export { ${schemaName} } from './model/types/${schemaName}';
      `,
    );
  } catch (e) {
    console.error('createPublicApi() Failed to create public API');
  }
};

export default createPublicApi;
