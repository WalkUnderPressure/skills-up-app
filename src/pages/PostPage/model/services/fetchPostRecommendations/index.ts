import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import { Post, postsApiRoutes } from '~/entities/Post';

const RECOMMENDATIONS_COUNT = 4;

export const [fetchPostRecommendations, useFetchPostRecommendations] = buildAppAsyncThunk<
  Array<Post>,
  void,
  string
>('postRecommendations/fetchPostRecommendations', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Array<Post>>(
      postsApiRoutes.filter({
        _limit: RECOMMENDATIONS_COUNT,
      }),
    );

    if (!response.data) {
      throw new Error("Can't get posts!");
    }

    return response.data;
  } catch (error) {
    // TODO: Check another buildAppAsyncThunk for error handling
    return rejectWithValue(String(error ?? ''));
  }
});
