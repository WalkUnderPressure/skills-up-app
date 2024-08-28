import { AsyncThunkRejectValue, createAppAsyncThunk } from 'app/providers/StoreProvider';
import { getBlogPostsPageInitialized } from '../../selectors/blogPageSelectors';
import fetchBlogPosts from '../../services/fetchBlogPosts/fetchBlogPosts';
import { blogPageActions } from '../../slice/blogPageSlice';

const initBlogPageState = createAppAsyncThunk<void, void, AsyncThunkRejectValue<string>>(
  'blogPage/initBlogPageState',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const state = getState();

    const isInitialized = getBlogPostsPageInitialized(state);

    if (!isInitialized) {
      dispatch(blogPageActions.initState());
      dispatch(fetchBlogPosts());
    }
  },
);

export default initBlogPageState;
