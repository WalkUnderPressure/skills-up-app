import { useTranslation } from 'react-i18next';

import useSortFieldOptions from '~/features/PostSortSelector/lib/useSortFieldOptions';
import useSortOrderOptions from '~/features/PostSortSelector/lib/useSortOrderOptions';
import useBlogSearchAndFilters from '~/pages/BlogPage/lib/useBlogSearchAndFilters';
import usePostTags from '~/features/PostTagsTabs/lib/usePostTags';
import { Input } from '~/shared/ui/redesigned/Input';
import { ListBox } from '~/shared/ui/redesigned/Popups';
import { VStack } from '~/shared/ui/redesigned/Stack';
import { Tabs } from '~/shared/ui/redesigned/Tabs';
import { Text } from '~/shared/ui/redesigned/Text';

import SearchIcon from '~/shared/assets/icons/search.svg';

type BlogPageFiltersRedesignedProps = PropsWithClassName;

const BlogPageFiltersRedesigned = (props: BlogPageFiltersRedesignedProps) => {
  const { className } = props;

  const { t } = useTranslation('pages.blog');

  const blogSearchAndFilters = useBlogSearchAndFilters();

  const sortFieldOptions = useSortFieldOptions();
  const orderOptions = useSortOrderOptions();
  const postTags = usePostTags();

  return (
    <VStack gap="16" className={className}>
      <Input
        value={blogSearchAndFilters.search.value}
        onChange={blogSearchAndFilters.search.onChange}
        leftAddon={
          <SearchIcon
            width={32}
            height={32}
            style={{
              fill: 'currentcolor',
              color: 'var(--redesigned-text)',
            }}
          />
        }
      />

      <VStack gap="8">
        <Text title={t('tags.select', { defaultValue: 'Select tags' })} />

        <Tabs
          tabs={postTags}
          onTabClick={blogSearchAndFilters.filterTag.onChange}
          value={blogSearchAndFilters.filterTag.value}
          wrapItems={true}
        />
      </VStack>

      <VStack gap="8">
        <Text title={t('sort.by', { defaultValue: 'Sort by', ns: 'common' })} />

        <VStack gap="16">
          <ListBox
            items={sortFieldOptions}
            onChange={blogSearchAndFilters.sortField.onChange}
            value={blogSearchAndFilters.sortField.value}
          />

          <ListBox
            items={orderOptions}
            onChange={blogSearchAndFilters.sortOrder.onChange}
            value={blogSearchAndFilters.sortOrder.value}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default BlogPageFiltersRedesigned;
