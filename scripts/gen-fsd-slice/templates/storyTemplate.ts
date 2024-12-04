import upperFirst from 'lodash.upperfirst';

const storyTemplate = (layer: string, component: string) => {
  const layerName = upperFirst(layer);
  const componentName = component;

  return `
/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
// { ${componentName}Props }
import ${component} from '.';

const meta = {
  title: '${layerName}/${componentName}',
  component: ${componentName},
  args: {},
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
`;
};

export default storyTemplate;
