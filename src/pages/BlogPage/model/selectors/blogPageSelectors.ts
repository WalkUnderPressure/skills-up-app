import { DEFAULT_POST_VIEW_TYPE } from '../slice/blogPageSlice';
import { StoreStateSchema } from 'app/providers/StoreProvider';

const getBlogPostViewType = (state: StoreStateSchema) => {
  return state.blogPage?.viewType || DEFAULT_POST_VIEW_TYPE;
};

const getBlogPostsIsLoading = (state: StoreStateSchema) => {
  return state.blogPage?.isLoading || false;
};

export { getBlogPostViewType, getBlogPostsIsLoading };
