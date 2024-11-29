import { configureStore } from '@reduxjs/toolkit';

import { scrollKeeperReducer } from 'features/ScrollKeeper';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import rtkApi from 'shared/api/rtkApi';
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
};

const rootReducers = (): StoreReducersMapObject => ({
  counter: counterReducer,
  user: userReducer,
  scrollKeeper: scrollKeeperReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
});

export type RootStatePart = ReturnType<typeof rootReducers>;

function createReduxStore(params: CreateReduxStoreParams) {
  const { initialState, initialReducers } = params;

  const rootReducer: StoreReducersMapObject = {
    ...initialReducers,
    ...rootReducers(),
  };

  const reducerManager = createReducerManager(rootReducer);

  const argsExt: ThunkExtra = {
    api: $api,
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
      }).concat(rtkApi.middleware),
  }) as ReduxStoreWithManager;

  rootStore.reducerManager = reducerManager;

  return rootStore;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default createReduxStore;
