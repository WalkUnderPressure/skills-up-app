import { useCallback, memo } from 'react';

import { PostSortFieldsKey, PostViewKey, PostTagsKey } from '~/entities/Post';
import {
  useBlogPostsSearch,
  useBlogPostsSearchTag,
  useBlogPostsSortField,
  useBlogPostsSortOrder,
  useBlogPostViewType,
} from '../../model/selectors/blogPageSelectors';
import { BlogViewTypeSwitcher } from '~/features/BlogViewTypeSwitcher';
import { useBlogPageActions } from '../../model/slices/blogPageSlice';
import { Input } from '~/shared/ui/Input';
import { SortOrder } from '~/shared/types/SortOrder';
import { fetchBlogPosts } from '../../model/services/fetchBlogPosts/fetchBlogPosts';
import { PostSortSelector } from '~/features/PostSortSelector';
import { useDebounce } from '~/shared/lib/hooks/useDebounce';
import { PostTagsTabs } from '~/features/PostTagsTabs';
import { HStack, VStack } from '~/shared/ui/Stack';

const FETCH_DELAY = 500;

type BlogPageFiltersProps = PropsWithClassName;

const BlogPageFilters = memo((props: BlogPageFiltersProps) => {
  const { className } = props;

  const postViewType = useBlogPostViewType();
  const postSortFiled = useBlogPostsSortField();
  const postSortOrder = useBlogPostsSortOrder();
  const postSearch = useBlogPostsSearch();
  const postSearchTag = useBlogPostsSearchTag();

  const { setPage, setViewType, setSortField, setSortOrder, setSearchTag, setSearch } =
    useBlogPageActions();

  const fetchData = useCallback(() => {
    setPage(1);
    fetchBlogPosts({ replace: true });
  }, [setPage]);

  const debouncedFetchData = useDebounce(fetchData, FETCH_DELAY);

  const changeViewType = useCallback(
    (nextViewType: PostViewKey) => {
      setViewType(nextViewType);
    },
    [setViewType],
  );

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

  return (
    <VStack gap="16" fullW className={className}>
      <HStack justify="between" align="center" gap="32" fullW>
        <PostSortSelector
          sortField={postSortFiled}
          sortOrder={postSortOrder}
          onChangeSortField={changeSortField}
          onChangeSortOrder={changeSortOrder}
        />

        <BlogViewTypeSwitcher viewType={postViewType} onChangeView={changeViewType} />
      </HStack>

      <Input value={postSearch} onChange={changeSearch} />

      <PostTagsTabs value={postSearchTag} onChangeTab={changeSearchTag} />
    </VStack>
  );
});

export default BlogPageFilters;
