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

import { AddCommentaryFormSchema } from '~/features/AddCommentaryForm';
import { SignInByUsernameSchema } from '~/features/SignInByUsername';
import { ScrollKeeperSchema } from '~/features/ScrollKeeper';
import { EditableProfileStateSchema } from '~/features/EditableProfileCard';
import { PostDetailsSchema } from '~/entities/Post';
import { UserStateSchema } from '~/entities/User';
import { BlogPageSchema } from '~/pages/BlogPage';
import { PostPageSchema } from '~/pages/PostPage';
import rtkApi from '~/shared/api/rtkApi';

type StoreStateSchema = {
  user: UserStateSchema;
  scrollKeeper: ScrollKeeperSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async
  'sign-in_username'?: SignInByUsernameSchema | undefined;
  profile?: EditableProfileStateSchema | undefined;
  postDetails?: PostDetailsSchema;
  addCommentaryForm?: AddCommentaryFormSchema;
  blogPage?: BlogPageSchema;
  postPage?: PostPageSchema;
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

export type {
  ThunkExtra,
  StoreStateSchema,
  StoreStateSchemaKeys,
  StoreReducersMapObject,
  ReduxStoreWithManager,
  ReducerManager,
};
