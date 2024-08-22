import { createAppAsyncThunk, AsyncThunkRejectValue } from 'app/providers/StoreProvider';
import { Post } from '../../types/Post';

export const fetchPostById = createAppAsyncThunk<Post, string, AsyncThunkRejectValue<string>>(
  'postDetails/fetchPostById',
  async (postId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Post>(`/posts/${postId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
