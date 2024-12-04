import { useCallback, memo } from 'react';

import { useAppDispatch, useAppSelector } from '~/app/providers/StoreProvider';
import {
  PostSortFieldsKey,
  PostSortSelector,
  PostViewKey,
  PostTagsTabs,
  PostTagsKey,
} from '~/entities/Post';
import {
  getBlogPostsSearch,
  getBlogPostsSearchTag,
  getBlogPostsSortField,
  getBlogPostsSortOrder,
  getBlogPostViewType,
} from '../../model/selectors/blogPageSelectors';
import { BlogViewTypeSwitcher } from '~/features/BlogViewTypeSwitcher';
import { blogPageActions } from '../../model/slices/blogPageSlice';
import { Input } from '~/shared/ui/Input';
import { SortOrder } from '~/shared/types/SortOrder';
import fetchBlogPosts from '../../model/services/fetchBlogPosts/fetchBlogPosts';
import { useDebounce } from '~/shared/lib/hooks/useDebounce';
import { HStack, VStack } from '~/shared/ui/Stack';

const FETCH_DELAY = 500;

type BlogPageFiltersProps = PropsWithClassName;

const BlogPageFilters = memo((props: BlogPageFiltersProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const postViewType = useAppSelector(getBlogPostViewType);
  const postSortFiled = useAppSelector(getBlogPostsSortField);
  const postSortOrder = useAppSelector(getBlogPostsSortOrder);
  const postSearch = useAppSelector(getBlogPostsSearch);
  const postSearchTag = useAppSelector(getBlogPostsSearchTag);

  const fetchData = useCallback(() => {
    dispatch(blogPageActions.setPage(1));
    dispatch(fetchBlogPosts({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, FETCH_DELAY);

  const changeViewType = useCallback(
    (nextViewType: PostViewKey) => {
      dispatch(blogPageActions.setViewType(nextViewType));
    },
    [dispatch],
  );

  const changeSortField = useCallback(
    (nextSortField: PostSortFieldsKey) => {
      dispatch(blogPageActions.setSortField(nextSortField));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const changeSortOrder = useCallback(
    (nextSortOrder: SortOrder) => {
      dispatch(blogPageActions.setSortOrder(nextSortOrder));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const changeSearchTag = useCallback(
    (nextSearchTag: PostTagsKey) => {
      dispatch(blogPageActions.setSearchTag(nextSearchTag));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const changeSearch = useCallback(
    (nextSearch: string) => {
      dispatch(blogPageActions.setSearch(nextSearch));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
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
