import { configureStore } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import $api from 'shared/api/api';
import {
  StoreStateSchema,
  StoreReducersMapObject,
  ReduxStoreWithManager,
  ThunkExtra,
} from '../schemas';
import createReducerManager from './createReducerManager';

type CreateReduxStoreParams = {
  initialState?: StoreStateSchema;
  initialReducers?: StoreReducersMapObject;
  navigate: NavigateFunction;
};

const rootRed = () => ({
  counter: counterReducer,
  user: userReducer,
});

export type RootStatePart = ReturnType<typeof rootRed>;

function createReduxStore(params: CreateReduxStoreParams) {
  const { initialState, initialReducers, navigate } = params;

  const rootReducer: StoreReducersMapObject = {
    ...initialReducers,
    ...rootRed(),
  };

  const reducerManager = createReducerManager(rootReducer);

  const argsExt: ThunkExtra = {
    api: $api,
    navigate,
  };

  const rootStore = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: argsExt,
        },
      }),
  }) as ReduxStoreWithManager;

  rootStore.reducerManager = reducerManager;

  return rootStore;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default createReduxStore;
