import { StoryFn } from '@storybook/react';

import { signInReducer } from 'features/SignInByUsername/model/slices/signInSlice';
import { StoreProvider, StoreStateSchema } from 'app/providers/StoreProvider';
import { StoreReducersMapObject } from 'app/providers/StoreProvider/schemas';
import { addCommentaryReducer } from 'features/AddCommentaryForm/model/slices/addCommentarySlice';
import { postDetailsReducer } from 'entities/Post/model/slices/postDetailsSlice';
import { blogPageReducer } from 'pages/BlogPage/model/slices/blogPageSlice';
import { scrollKeeperReducer } from 'features/ScrollKeeper';
import { profileReducer } from 'features/EditableProfileCard';
import postPageReducer from 'pages/PostPage/model/slices/postPageReducer';

const initialReducers: DeepPartial<StoreReducersMapObject> = {
  'sign-in_username': signInReducer,
  profile: profileReducer,
  postDetails: postDetailsReducer,
  addCommentaryForm: addCommentaryReducer,
  blogPage: blogPageReducer,
  scrollKeeper: scrollKeeperReducer,
  postPage: postPageReducer,
};

const StoreDecorator = (initialState: DeepPartial<StoreStateSchema> = {}) => {
  return function StoreDecoratorWrapper(Story: StoryFn) {
    return (
      <StoreProvider initialState={initialState} initialReducers={initialReducers}>
        <Story />
      </StoreProvider>
    );
  };
};

export default StoreDecorator;
