import type { Preview } from '@storybook/react';

import AddonThemesDecorator from '~/shared/config/storybook/decorators/AddonThemesDecorator';
import RoutingDecorator from '~/shared/config/storybook/decorators/RoutingDecorator';
import StyleDecorator from '~/shared/config/storybook/decorators/StyleDecorator';

// Additional setup in preview-head.html
const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RoutingDecorator, StyleDecorator, AddonThemesDecorator],
  tags: ['autodocs'],
};

export default preview;
