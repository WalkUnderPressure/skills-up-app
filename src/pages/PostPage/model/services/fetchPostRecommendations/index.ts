import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import { Post } from '~/entities/Post';

const RECOMMENDATIONS_COUNT = 4;

export const [fetchPostRecommendations, useFetchPostRecommendations] = buildAppAsyncThunk<
  Array<Post>,
  void,
  string
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
