import { createAppAsyncThunk, AsyncThunkRejectValue } from '~/app/providers/StoreProvider';
import { Post } from '~/entities/Post';

const RECOMMENDATIONS_COUNT = 4;

const fetchPostRecommendations = createAppAsyncThunk<
  Array<Post>,
  void,
  AsyncThunkRejectValue<string>
>('postRecommendations/fetchPostRecommendations', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Array<Post>>(`/posts/`, {
      params: {
        _limit: RECOMMENDATIONS_COUNT,
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

export default fetchPostRecommendations;
