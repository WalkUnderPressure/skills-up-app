import {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  StoreEnhancer,
  ThunkDispatch,
  Tuple,
  UnknownAction,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AddCommentaryFormSchema } from 'features/AddCommentaryForm';
import { SignInByUsernameSchema } from 'features/SignInByUsername';
import { ScrollKeeperSchema } from 'features/ScrollKeeper';
import { PostCommentarySchema } from 'pages/PostPage';
import { ProfileStateSchema } from 'entities/Profile';
import { CounterStateSchema } from 'entities/Counter';
import { PostDetailsSchema } from 'entities/Post';
import { UserStateSchema } from 'entities/User';
import { BlogPageSchema } from 'pages/BlogPage';

type StoreStateSchema = {
  counter: CounterStateSchema;
  user: UserStateSchema;
  scrollKeeper: ScrollKeeperSchema;

  // Async
  'sign-in_username'?: SignInByUsernameSchema | undefined;
  profile?: ProfileStateSchema | undefined;
  postDetails?: PostDetailsSchema;
  postCommentaries?: PostCommentarySchema;
  addCommentaryForm?: AddCommentaryFormSchema;
  blogPage?: BlogPageSchema;
};

export type StoreStateSchemaPossibleEmpty = StoreStateSchema | undefined;

type StoreReducersMapObject = ReducersMapObject<StoreStateSchema>;

type StoreStateSchemaKeys = keyof StoreStateSchema;

type ReducerManager = {
  getReducerMap: () => StoreReducersMapObject;
  reduce: (state: StoreStateSchemaPossibleEmpty, action: UnknownAction) => StoreStateSchema;
  add: (name: StoreStateSchemaKeys, reducer: Reducer) => boolean;
  remove: (name: StoreStateSchemaKeys) => void;
};

type StoreEnhancers = Tuple<
  [
    StoreEnhancer<{
      dispatch: ThunkDispatch<StoreStateSchema, ThunkExtra, UnknownAction>;
      reducerManager: ReducerManager;
    }>,
    StoreEnhancer,
  ]
>;

type ReduxStoreWithManager = EnhancedStore<StoreStateSchema, UnknownAction, StoreEnhancers>;

type ThunkExtra = {
  api: AxiosInstance;
};

export {
  ThunkExtra,
  StoreStateSchema,
  StoreStateSchemaKeys,
  StoreReducersMapObject,
  ReduxStoreWithManager,
  ReducerManager,
};
