import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import StoreStateSchema from '../schemas';

function createReduxStore(initialState?: StoreStateSchema) {
  const rootReducer: ReducersMapObject<StoreStateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StoreStateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export default createReduxStore;
