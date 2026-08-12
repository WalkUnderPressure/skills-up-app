import { memo } from 'react';

import { Input } from '~/shared/ui/deprecated/Input';
import { PostSortSelector } from '~/features/PostSortSelector';
import { PostTagsTabs } from '~/features/PostTagsTabs';
import { HStack, VStack } from '~/shared/ui/redesigned/Stack';
import { BlogPageDataTestIds } from '~/pages/BlogPage/constants';
import BlogListViewSwitcher from '../BlogListViewSwitcher';
import useBlogSearchAndFilters from '~/pages/BlogPage/lib/useBlogSearchAndFilters';

type BlogPageFiltersDeprecatedProps = PropsWithClassName;

const BlogPageFiltersDeprecated = memo((props: BlogPageFiltersDeprecatedProps) => {
  const { className } = props;

  const blogSearchAndFilters = useBlogSearchAndFilters();

  return (
    <VStack gap="16" fullW className={className}>
      <HStack justify="between" align="center" gap="32" fullW>
        <PostSortSelector
          sortField={blogSearchAndFilters.sortField.value}
          sortOrder={blogSearchAndFilters.sortOrder.value}
          onChangeSortField={blogSearchAndFilters.sortField.onChange}
          onChangeSortOrder={blogSearchAndFilters.sortOrder.onChange}
        />

        <BlogListViewSwitcher />
      </HStack>

      <Input
        value={blogSearchAndFilters.search.value}
        onChange={blogSearchAndFilters.search.onChange}
        data-testid={BlogPageDataTestIds.SearchAndFilters.Input}
      />

      <PostTagsTabs
        value={blogSearchAndFilters.filterTag.value}
        onChangeTab={blogSearchAndFilters.filterTag.onChange}
      />
    </VStack>
  );
});

export default BlogPageFiltersDeprecated;
