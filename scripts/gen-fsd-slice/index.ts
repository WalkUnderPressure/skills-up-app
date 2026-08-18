import { execSync } from 'child_process';

import createTemplate from './templates/createTemplate';
import getFsdSliceName from './helpers/getFsdSliceName';

const layer = String(process.argv[2]).toLowerCase();
let sliceName = getFsdSliceName(process.argv[3]);

const layers = ['features', 'entities', 'pages'];

(async () => {
  if (!layer || !layers.includes(layer)) {
    console.error(`Specify a layer: ${layers.map((layerName) => `"${layerName}"`).join(' or ')}`);
    return;
  }

  if (!sliceName) {
    console.error('Specify the name of the slide');
    return;
  }

  if (layer === 'pages') {
    sliceName = getFsdSliceName(sliceName + 'Page');
  }

  console.info(`Start creating ${layer}/${sliceName}`);
  console.info(`...`);

  createTemplate(layer, sliceName).then(() => {
    execSync(`npm run lint:code:fix src/${layer}/${sliceName}/**`);

    console.info(`Finish creating ${layer}/${sliceName}`);
    console.info(`Open public API: ${layer}/${sliceName}/index.ts`);
  });
})();
