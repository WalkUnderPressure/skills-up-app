import { AsyncThunkRejectValue, createAppAsyncThunk } from '~/app/providers/StoreProvider';
import { Commentary } from '~/entities/Commentary';
import { getUserAuthData } from '~/entities/User';
import { getPostDetails } from '~/entities/Post';

const addCommentaryToPost = createAppAsyncThunk<Commentary, string, AsyncThunkRejectValue<string>>(
  'postDetails/addCommentaryToPost',
  async (commentaryText, thunkAPI) => {
    const {
      getState,
      rejectWithValue,
      extra: { api },
    } = thunkAPI;

    const state = getState();

    const userId = getUserAuthData(state)?.id;
    const postId = getPostDetails(state)?.id;

    if (!commentaryText || !userId || !postId) {
      return rejectWithValue('no-data');
    }

    try {
      const response = await api.post<Commentary>('/comments/', {
        text: commentaryText,
        postId,
        userId,
        profileId: userId,
      });

      const createdCommentary = response.data;

      if (!createdCommentary) {
        throw new Error();
      }

      return createdCommentary;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);

export { addCommentaryToPost };
