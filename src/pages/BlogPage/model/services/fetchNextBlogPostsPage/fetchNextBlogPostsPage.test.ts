import { TestAsyncThunk } from '~/shared/config/tests/TestAsyncThunk';
import fetchNextBlogPostsPage from './fetchNextBlogPostsPage';
import fetchBlogPosts from '../fetchBlogPosts/fetchBlogPosts';

jest.mock('../fetchBlogPosts/fetchBlogPosts');

const initState = {
  page: 1,
  ids: [],
  entities: {},
  limit: 5,
  isLoading: false,
  hasMore: true,
};

describe('fetchNextBlogPostsPage', () => {
  test('fetchBlogPosts should be called', async () => {
    const pageNumber = 5;

    const thunk = new TestAsyncThunk(fetchNextBlogPostsPage, {
      blogPage: {
        ...initState,
        page: pageNumber,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchBlogPosts).toHaveBeenCalled();
  });

  test('fetchBlogPosts should not be called (when hasMore is false)', async () => {
    const thunk = new TestAsyncThunk(fetchNextBlogPostsPage, {
      blogPage: {
        ...initState,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchBlogPosts).not.toHaveBeenCalled();
  });

  test('fetchBlogPosts should not be called (when isLoading is true)', async () => {
    const thunk = new TestAsyncThunk(fetchNextBlogPostsPage, {
      blogPage: {
        ...initState,
        isLoading: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchBlogPosts).not.toHaveBeenCalled();
  });
});
