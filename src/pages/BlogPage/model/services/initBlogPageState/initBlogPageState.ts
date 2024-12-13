import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import { getBlogPostsPageInitialized } from '../../selectors/blogPageSelectors';
import { fetchBlogPosts } from '../../services/fetchBlogPosts/fetchBlogPosts';
import { blogPageActions } from '../../slices/blogPageSlice';
import BlogSearchParamsMap, { SearchFieldType } from '../../mappers/BlogSearchParamsMap';

export const [initBlogPageState, useInitBlogPageState] = buildAppAsyncThunk<
  void,
  URLSearchParams,
  string
>('blogPage/initBlogPageState', async (searchParams, thunkApi) => {
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
});
