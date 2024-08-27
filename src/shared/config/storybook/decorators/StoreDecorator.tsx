import { StoryFn } from '@storybook/react';

import { signInReducer } from 'features/SignInByUsername/model/slice/signInSlice';
import { StoreProvider, StoreStateSchema } from 'app/providers/StoreProvider';
import { StoreReducersMapObject } from 'app/providers/StoreProvider/schemas';
import { addCommentaryReducer } from 'features/AddCommentaryForm/model/slice/addCommentarySlice';
import { postCommentariesReducer } from 'pages/PostPage/model/slice/postCommentariesSlice';
import { postDetailsReducer } from 'entities/Post/model/slice/postDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { blogPageReducer } from 'pages/BlogPage';

const initialReducers: DeepPartial<StoreReducersMapObject> = {
  'sign-in_username': signInReducer,
  profile: profileReducer,
  postDetails: postDetailsReducer,
  postCommentaries: postCommentariesReducer,
  addCommentaryForm: addCommentaryReducer,
  blogPage: blogPageReducer,
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
