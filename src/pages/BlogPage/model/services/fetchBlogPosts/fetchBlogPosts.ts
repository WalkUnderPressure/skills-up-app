import { createAppAsyncThunk, AsyncThunkRejectValue } from 'app/providers/StoreProvider';
import { getBlogPostsLimit } from '../../selectors/blogPageSelectors';
import { Post } from 'entities/Post';

type FetchBlogPostsParams = {
  page?: number;
};

const fetchBlogPosts = createAppAsyncThunk<
  Array<Post>,
  FetchBlogPostsParams | undefined,
  AsyncThunkRejectValue<string>
>('blogPage/fetchBlogPosts', async (params = {}, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const state = getState();

  const limit = getBlogPostsLimit(state);
  const { page = 1 } = params;

  try {
    const response = await extra.api.get<Array<Post>>(`/posts/`, {
      params: {
        _expand: 'profile',
        _limit: limit,
        _page: page,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});

export default fetchBlogPosts;
