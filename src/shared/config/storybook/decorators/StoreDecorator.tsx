import { StoryFn } from '@storybook/react';

import { signInReducer } from 'features/SignInByUsername/model/slice/signInSlice';
import { StoreProvider, StoreStateSchema } from 'app/providers/StoreProvider';
import { StoreReducersMapObject } from 'app/providers/StoreProvider/schemas';
import { profileReducer } from 'entities/Profile';
import { postDetailsReducer } from 'entities/Post/model/slice/postDetailsSlice';
import { postCommentariesReducer } from 'pages/PostPage/model/slice/postCommentariesSlice';

const initialReducers: DeepPartial<StoreReducersMapObject> = {
  'sign-in_username': signInReducer,
  profile: profileReducer,
  postDetails: postDetailsReducer,
  postCommentaries: postCommentariesReducer,
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
