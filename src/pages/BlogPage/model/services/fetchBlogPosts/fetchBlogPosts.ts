import { createAppAsyncThunk, AsyncThunkRejectValue } from 'app/providers/StoreProvider';
import {
  getBlogPostsLimit,
  getBlogPostsPage,
  getBlogPostsSearch,
  getBlogPostsSearchTag,
  getBlogPostsSortField,
  getBlogPostsSortOrder,
} from '../../selectors/blogPageSelectors';
import BlogSearchParamsMap from '../../mappers/BlogSearchParamsMap';
import { addQueryParams } from 'shared/lib/url/addQueryParams';
import { Post, PostTagsMap } from 'entities/Post';

type FetchBlogPostsParams = {
  // page?: number;
  replace?: boolean;
};

const fetchBlogPosts = createAppAsyncThunk<
  Array<Post>,
  FetchBlogPostsParams | undefined,
  AsyncThunkRejectValue<string>
>('blogPage/fetchBlogPosts', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const state = getState();

  // pagination
  const limit = getBlogPostsLimit(state);
  const page = getBlogPostsPage(state);

  // filters
  const sortField = getBlogPostsSortField(state);
  const sortOrder = getBlogPostsSortOrder(state);
  const search = getBlogPostsSearch(state);
  const searchTag = getBlogPostsSearchTag(state);

  try {
    addQueryParams({
      [BlogSearchParamsMap.sort.name]: sortField,
      [BlogSearchParamsMap.order.name]: sortOrder,
      [BlogSearchParamsMap.search.name]: search,
      [BlogSearchParamsMap.tag.name]: searchTag,
    });

    const response = await extra.api.get<Array<Post>>(`/posts/`, {
      params: {
        _limit: limit,
        _page: page,
        _sort: sortField,
        _order: sortOrder,
        tags: searchTag === PostTagsMap.ALL ? undefined : searchTag,
        q: search,
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

export default fetchBlogPosts;
