import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import { Commentary } from '~/entities/Commentary';

export const [fetchCommentariesByPostId, useFetchCommentariesByPostId] = buildAppAsyncThunk<
  Array<Commentary>,
  {
    postId: string | undefined;
  },
  string
>('postCommentaries/fetchCommentariesByPostId', async (params, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  const { postId } = params;

  try {
    if (!postId) {
      throw new Error();
    }

    const response = await extra.api.get<Array<Commentary>>(`/comments/`, {
      params: {
        postId,
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
