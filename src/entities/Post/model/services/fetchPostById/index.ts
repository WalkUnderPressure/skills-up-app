import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import { Post } from '../../types/Post';

export const [fetchPostById, useFetchPostById] = buildAppAsyncThunk<
  Post,
  {
    postId: string | undefined;
  },
  string
>('postDetails/fetchPostById', async (params, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  const { postId } = params;

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
