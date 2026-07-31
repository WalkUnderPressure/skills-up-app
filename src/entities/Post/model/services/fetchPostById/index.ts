import { postsApiRoutes } from '~/entities/Post/api/postsApiRoutes';
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
      throw new Error('Post id not provided!');
    }

    const response = await extra.api.get<Post>(postsApiRoutes.byPostId(postId));

    if (!response.data) {
      throw new Error('Post data not exist!');
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(String(error ?? ''));
  }
});
