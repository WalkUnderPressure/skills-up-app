import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StoreStateSchema, StoreReducersMapObject, ReduxStoreWithManager } from '../schemas';
import createReducerManager from './createReducerManager';

function createReduxStore(
  initialState?: StoreStateSchema,
  initialReducers?: StoreReducersMapObject,
): ReduxStoreWithManager {
  const rootReducer: StoreReducersMapObject = {
    ...initialReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const rootStore = configureStore<StoreStateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  const store: ReduxStoreWithManager = { ...rootStore, reducerManager };

  return store;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default createReduxStore;
