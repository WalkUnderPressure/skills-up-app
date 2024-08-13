import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';

import { SignInByUsernameSchema } from 'features/SignInByUsername';
import { CounterStateSchema } from 'entities/Counter';
import { UserStateSchema } from 'entities/User';

type StoreStateSchema = {
  counter: CounterStateSchema;
  user: UserStateSchema;
  'sign-in_username'?: SignInByUsernameSchema;
};

type StoreReducersMapObject = ReducersMapObject<StoreStateSchema>;

type StoreStateSchemaKeys = keyof StoreStateSchema;

type ReducerManager = {
  getReducerMap: () => StoreReducersMapObject;
  reduce: (state: StoreStateSchema, action: UnknownAction) => StoreStateSchema;
  add: (name: StoreStateSchemaKeys, reducer: Reducer) => void;
  remove: (name: StoreStateSchemaKeys) => void;
};

interface ReduxStoreWithManager extends EnhancedStore<StoreStateSchema> {
  reducerManager: ReducerManager;
}

export {
  StoreStateSchema,
  StoreStateSchemaKeys,
  StoreReducersMapObject,
  ReduxStoreWithManager,
  ReducerManager,
};
