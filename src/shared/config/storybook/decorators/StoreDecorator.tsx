import { StoryFn } from '@storybook/react';

import { StoreProvider, StoreStateSchema } from 'app/providers/StoreProvider';

const StoreDecorator = (initialState: DeepPartial<StoreStateSchema>) => {
  return function StoreDecoratorWrapper(Story: StoryFn) {
    return (
      <StoreProvider initialState={initialState}>
        <Story />
      </StoreProvider>
    );
  };
};

export default StoreDecorator;
