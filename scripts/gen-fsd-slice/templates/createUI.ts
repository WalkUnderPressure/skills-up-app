import fs from 'fs/promises';

import resolveRoot from '../helpers/resolveRoot';
import componentTemplate from './componentTemplate';
import storyTemplate from './storyTemplate';
import styleTemplate from './styleTemplate';

const createUI = async (layer: string, sliceName: string) => {
  const resolveUIPath = (...segments: Array<string>) => {
    return resolveRoot('src', layer, sliceName, 'ui', ...segments);
  };

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (e) {
      console.error('createUI.createUIDir() Failed to create UI directory');
    }
  };

  const createComponent = async () => {
    try {
      await fs.mkdir(resolveUIPath(sliceName));

      await fs.writeFile(resolveUIPath(sliceName, 'index.tsx'), componentTemplate(sliceName));

      await fs.writeFile(
        resolveUIPath(sliceName, `${sliceName}.stories.tsx`),
        storyTemplate(layer, sliceName),
      );

      await fs.writeFile(
        resolveUIPath(sliceName, `${sliceName}.module.scss`),
        styleTemplate(sliceName),
      );
    } catch (e) {
      console.error('createUI.createComponent() Failed to create a component');
    }
  };

  await createUIDir();
  await createComponent();
};

export default createUI;
