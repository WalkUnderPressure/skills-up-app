import { combineReducers, ReducersMapObject } from '@reduxjs/toolkit';

import { postRecommendationsReducer } from './postRecommendationsSlice';
import { postCommentariesReducer } from './postCommentariesSlice';
import PostPageSchema from '../types/PostPageSchema';

const postPageReducer = combineReducers<ReducersMapObject<PostPageSchema>>({
  postCommentaries: postCommentariesReducer,
  postRecommendations: postRecommendationsReducer,
});

export default postPageReducer;
