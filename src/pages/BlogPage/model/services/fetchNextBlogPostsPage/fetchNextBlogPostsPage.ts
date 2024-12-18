import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import {
  getBlogPostsHasMore,
  getBlogPostsIsLoading,
  getBlogPostsPage,
} from '../../selectors/blogPageSelectors';
import { fetchBlogPosts } from '../../services/fetchBlogPosts/fetchBlogPosts';
import { blogPageActions } from '../../slices/blogPageSlice';

export const [fetchNextBlogPostsPage, useFetchNextBlogPostsPage] = buildAppAsyncThunk<
  void,
  void,
  string
>('blogPage/fetchNextBlogPostsPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const state = getState();

  const isLoading = getBlogPostsIsLoading(state);
  const hasMore = getBlogPostsHasMore(state);
  const page = getBlogPostsPage(state);

  if (hasMore && !isLoading) {
    const nextPage = page + 1;

    dispatch(blogPageActions.setPage(nextPage));
    dispatch(fetchBlogPosts());
  }
});
