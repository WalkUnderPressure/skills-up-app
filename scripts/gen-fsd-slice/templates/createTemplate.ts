import fs from 'fs/promises';

import resolveRoot from '../helpers/resolveRoot';
import createPublicApi from './createPublicApi';
import createModel from './createModel';
import createUI from './createUI';

const createTemplate = async (layer: string, sliceName: string) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName));
  } catch (e) {
    console.error(`createTemplate() Failed to create a directory for the slice ${sliceName}`);
  }

  await createModel(layer, sliceName);
  await createUI(layer, sliceName);
  await createPublicApi(layer, sliceName);
};

export default createTemplate;
