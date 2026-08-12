import { useCallback } from 'react';

import {
  useBlogPostsSearch,
  useBlogPostsSearchTag,
  useBlogPostsSortField,
  useBlogPostsSortOrder,
} from '../model/selectors/blogPageSelectors';
import { useFetchBlogPosts } from '../model/services/fetchBlogPosts/fetchBlogPosts';
import { useBlogPageActions } from '../model/slices/blogPageSlice';
import { PostSortFieldsKey, PostTagsKey } from '~/entities/Post';
import { useDebounce } from '~/shared/lib/hooks/useDebounce';
import { SortOrder } from '~/shared/types/SortOrder';

const FETCH_DELAY = 500;

function useBlogSearchAndFilters() {
  const postSortFiled = useBlogPostsSortField();
  const postSortOrder = useBlogPostsSortOrder();
  const postSearch = useBlogPostsSearch();
  const postSearchTag = useBlogPostsSearchTag();

  const { setPage, setSortField, setSortOrder, setSearchTag, setSearch } = useBlogPageActions();

  const fetchBlogPosts = useFetchBlogPosts();

  const fetchData = useCallback(() => {
    setPage(1);
    fetchBlogPosts({ replace: true });
  }, [fetchBlogPosts, setPage]);

  const debouncedFetchData = useDebounce(fetchData, FETCH_DELAY);

  const changeSortField = useCallback(
    (nextSortField: PostSortFieldsKey) => {
      setSortField(nextSortField);
      fetchData();
    },
    [fetchData, setSortField],
  );

  const changeSortOrder = useCallback(
    (nextSortOrder: SortOrder) => {
      setSortOrder(nextSortOrder);
      fetchData();
    },
    [fetchData, setSortOrder],
  );

  const changeSearchTag = useCallback(
    (nextSearchTag: PostTagsKey) => {
      setSearchTag(nextSearchTag);
      fetchData();
    },
    [setSearchTag, fetchData],
  );

  const changeSearch = useCallback(
    (nextSearch: string) => {
      setSearch(nextSearch);
      debouncedFetchData();
    },
    [setSearch, debouncedFetchData],
  );

  return {
    search: {
      value: postSearch,
      onChange: changeSearch,
    },
    sortField: {
      value: postSortFiled,
      onChange: changeSortField,
    },
    sortOrder: {
      value: postSortOrder,
      onChange: changeSortOrder,
    },
    filterTag: {
      value: postSearchTag,
      onChange: changeSearchTag,
    },
  };
}

export default useBlogSearchAndFilters;
