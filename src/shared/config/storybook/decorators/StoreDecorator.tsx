import { StoryFn } from '@storybook/react';

import {
  StoreReducersMapObject,
  StoreStateSchemaKeys,
} from '~/app/providers/StoreProvider/schemas';
import { addCommentaryReducer } from '~/features/AddCommentaryForm/model/slices/addCommentarySlice';
import { signInReducer } from '~/features/SignInByUsername/model/slices/signInSlice';
import { postDetailsReducer } from '~/entities/Post/model/slices/postDetailsSlice';
import { StoreProvider, StoreStateSchema } from '~/app/providers/StoreProvider';
import { blogPageReducer } from '~/pages/BlogPage/model/slices/blogPageSlice';
import { ReducersMap } from '~/shared/lib/components/DynamicReducerProvider';
import postPageReducer from '~/pages/PostPage/model/slices/postPageReducer';
import { profileReducer } from '~/features/EditableProfileCard';
import { scrollKeeperReducer } from '~/features/ScrollKeeper';

export type TestStoreInitialReducers = Partial<ReducersMap>;
export type TestStoreInitialState = {
  [name in StoreStateSchemaKeys]?: DeepPartial<StoreStateSchema[name]>;
};

const initialReducers: TestStoreInitialReducers = {
  'sign-in_username': signInReducer,
  profile: profileReducer,
  postDetails: postDetailsReducer,
  addCommentaryForm: addCommentaryReducer,
  blogPage: blogPageReducer,
  scrollKeeper: scrollKeeperReducer,
  postPage: postPageReducer,
};

const StoreDecorator = (initialState: TestStoreInitialState = {}) => {
  return function StoreDecoratorWrapper(Story: StoryFn) {
    return (
      <StoreProvider
        initialState={initialState as StoreStateSchema}
        initialReducers={initialReducers as StoreReducersMapObject}
      >
        <Story />
      </StoreProvider>
    );
  };
};

export default StoreDecorator;
