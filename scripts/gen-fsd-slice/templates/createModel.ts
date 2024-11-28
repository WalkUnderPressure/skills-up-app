import fs from 'fs/promises';

import createSchemaTypeName from '../helpers/createSchemaTypeName';
import getReduxSliceName from '../helpers/getReduxSliceName';
import resolveRoot from '../helpers/resolveRoot';
import schemaTypeTemplate from './schemaTypeTemplate';
import reduxSliceTemplate from './reduxSliceTemplate';

const createModel = async (layer: string, sliceName: string) => {
  const resolveModelPath = (...segments: Array<string>) => {
    return resolveRoot('src', layer, sliceName, 'model', ...segments);
  };

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slices'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (e) {
      console.error(
        `createModel.createModelStructure() Failed to create a model segment for a slice ${sliceName}`,
        e,
      );
    }
  };

  const createReduxSlice = async () => {
    try {
      const sliceFolderName = getReduxSliceName(sliceName);

      await fs.writeFile(
        resolveModelPath('slices', `${sliceFolderName}Slice.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (e) {
      console.error('createModel.createReduxSlice() Failed to create a redux slice', e);
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${createSchemaTypeName(sliceName)}.ts`),
        schemaTypeTemplate(sliceName),
      );
    } catch (e) {
      console.error('createModel.createSchemaType() Failed to create a stack schema type', e);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
};

export default createModel;
