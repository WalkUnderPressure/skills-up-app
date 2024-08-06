import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import StoreStateSchema from '../schemas';

function createReduxStore(initialState?: StoreStateSchema) {
  return configureStore<StoreStateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export default createReduxStore;
