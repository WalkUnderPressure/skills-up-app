import {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  StoreEnhancer,
  ThunkDispatch,
  Tuple,
  UnknownAction,
} from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { AxiosInstance } from 'axios';

import { SignInByUsernameSchema } from 'features/SignInByUsername';
import { ProfileStateSchema } from 'entities/Profile';
import { CounterStateSchema } from 'entities/Counter';
import { UserStateSchema } from 'entities/User';

type StoreStateSchema = {
  counter: CounterStateSchema;
  user: UserStateSchema;

  // Async
  'sign-in_username'?: SignInByUsernameSchema;
  profile?: ProfileStateSchema;
};

type StoreReducersMapObject = ReducersMapObject<StoreStateSchema>;

type StoreStateSchemaKeys = keyof StoreStateSchema;

type ReducerManager = {
  getReducerMap: () => StoreReducersMapObject;
  reduce: (state: StoreStateSchema, action: UnknownAction) => StoreStateSchema;
  add: (name: StoreStateSchemaKeys, reducer: Reducer) => void;
  remove: (name: StoreStateSchemaKeys) => void;
};

type StoreEnhancers = Tuple<
  [
    StoreEnhancer<{
      dispatch: ThunkDispatch<StoreStateSchema, undefined, UnknownAction>;
      reducerManager: ReducerManager;
    }>,
    StoreEnhancer,
  ]
>;

type ReduxStoreWithManager = EnhancedStore<StoreStateSchema, UnknownAction, StoreEnhancers>;

type ThunkExtra = {
  api: AxiosInstance;
  navigate: NavigateFunction;
};

export {
  ThunkExtra,
  StoreStateSchema,
  StoreStateSchemaKeys,
  StoreReducersMapObject,
  ReduxStoreWithManager,
  ReducerManager,
};
