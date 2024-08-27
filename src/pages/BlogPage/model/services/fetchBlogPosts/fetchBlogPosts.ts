import { createAppAsyncThunk, AsyncThunkRejectValue } from 'app/providers/StoreProvider';
import { Post } from 'entities/Post';

const fetchBlogPosts = createAppAsyncThunk<Array<Post>, void, AsyncThunkRejectValue<string>>(
  'blogPage/fetchBlogPosts',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Array<Post>>(`/posts/`, {
        params: {
          _expand: 'profile',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);

export default fetchBlogPosts;
