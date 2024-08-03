import { StoryFn } from '@storybook/react';

import { RoutingProvider } from 'app/providers/RoutingProvider';

const RoutingDecorator = (Story: StoryFn) => {
  return (
    <RoutingProvider>
      <Story />
    </RoutingProvider>
  );
};

export default RoutingDecorator;
