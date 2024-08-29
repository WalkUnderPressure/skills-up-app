import { AsyncThunkRejectValue, createAppAsyncThunk } from 'app/providers/StoreProvider';
import { getBlogPostsPageInitialized } from '../../selectors/blogPageSelectors';
import fetchBlogPosts from '../../services/fetchBlogPosts/fetchBlogPosts';
import { blogPageActions } from '../../slice/blogPageSlice';
import BlogSearchParamsMap, { SearchFieldType } from '../../mappers/BlogSearchParamsMap';

const initBlogPageState = createAppAsyncThunk<void, URLSearchParams, AsyncThunkRejectValue<string>>(
  'blogPage/initBlogPageState',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const state = getState();

    const isInitialized = getBlogPostsPageInitialized(state);

    if (!isInitialized) {
      searchParams.forEach((value, key) => {
        const searchKey = key as SearchFieldType;

        const actionName = BlogSearchParamsMap[searchKey]?.action;
        const action = blogPageActions[actionName];

        if (value && action) {
          dispatch(action(value as never));
        }
      });

      dispatch(blogPageActions.initState());
      dispatch(fetchBlogPosts());
    }
  },
);

export default initBlogPageState;
