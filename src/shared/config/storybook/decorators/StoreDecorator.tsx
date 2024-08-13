import { StoryFn } from '@storybook/react';

import { signInReducer } from 'features/SignInByUsername/model/slice/signInSlice';
import { StoreProvider, StoreStateSchema } from 'app/providers/StoreProvider';
import { StoreReducersMapObject } from 'app/providers/StoreProvider/schemas';

const initialReducers: DeepPartial<StoreReducersMapObject> = {
  'sign-in_username': signInReducer,
};

const StoreDecorator = (initialState: DeepPartial<StoreStateSchema>) => {
  return function StoreDecoratorWrapper(Story: StoryFn) {
    return (
      <StoreProvider initialState={initialState} initialReducers={initialReducers}>
        <Story />
      </StoreProvider>
    );
  };
};

export default StoreDecorator;
