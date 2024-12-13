import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import { Post } from '../../types/Post';

export const [fetchPostById, useFetchPostById] = buildAppAsyncThunk<
  Post,
  {
    postId: string | undefined;
  },
  string
>('postDetails/fetchPostById', async (postId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    if (!postId) {
      throw new Error();
    }

    const response = await extra.api.get<Post>(`/posts/${postId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
