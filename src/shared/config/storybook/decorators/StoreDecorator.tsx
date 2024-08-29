import { StoryFn } from '@storybook/react';

import { signInReducer } from 'features/SignInByUsername/model/slice/signInSlice';
import { StoreProvider, StoreStateSchema } from 'app/providers/StoreProvider';
import { StoreReducersMapObject } from 'app/providers/StoreProvider/schemas';
import { addCommentaryReducer } from 'features/AddCommentaryForm/model/slice/addCommentarySlice';
import { postDetailsReducer } from 'entities/Post/model/slice/postDetailsSlice';
import { blogPageReducer } from 'pages/BlogPage/model/slice/blogPageSlice';
import { scrollKeeperReducer } from 'features/ScrollKeeper';
import { profileReducer } from 'entities/Profile';
import postPageReducer from 'pages/PostPage/model/slice/postPageReducer';

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
