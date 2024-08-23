import { createAppAsyncThunk, AsyncThunkRejectValue } from 'app/providers/StoreProvider';
import { Commentary } from 'entities/Commentary';

const fetchCommentariesByPostId = createAppAsyncThunk<
  Array<Commentary>,
  string | undefined,
  AsyncThunkRejectValue<string>
>('postCommentaries/fetchCommentariesByPostId', async (postId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    if (!postId) {
      throw new Error();
    }

    const response = await extra.api.get<Array<Commentary>>(`/comments/`, {
      params: {
        postId,
        _expand: 'profile',
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});

export default fetchCommentariesByPostId;
