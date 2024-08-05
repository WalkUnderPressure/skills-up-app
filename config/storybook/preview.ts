import type { Preview } from '@storybook/react';

import RoutingDecorator from 'shared/config/storybook/decorators/RoutingDecorator';
import StyleDecorator from 'shared/config/storybook/decorators/StyleDecorator';
import ThemeDecorator from 'shared/config/storybook/decorators/ThemeDecorator';

// Additional setup in preview-head.html
const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RoutingDecorator, StyleDecorator, ThemeDecorator],
  tags: ['autodocs'],
};

export default preview;
