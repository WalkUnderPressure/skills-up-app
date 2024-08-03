import { StoryFn } from '@storybook/react';

import 'app/styles/index.scss';

const StyleDecorator = (Story: StoryFn) => {
  return <Story />;
};

export default StyleDecorator;
