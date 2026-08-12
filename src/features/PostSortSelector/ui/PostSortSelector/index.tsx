import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PostSortFieldsKey } from '~/entities/Post';
import { Select } from '~/shared/ui/deprecated/Select';
import { SortOrder } from '~/shared/types/SortOrder';
import classNames from '~/shared/lib/classNames';
import cls from './PostSortSelector.module.scss';
import { HStack } from '~/shared/ui/redesigned/Stack';
import { BlogPageDataTestIds } from '~/pages/BlogPage/constants';
import useSortOrderOptions from '~/features/PostSortSelector/lib/useSortOrderOptions';
import useSortFieldOptions from '~/features/PostSortSelector/lib/useSortFieldOptions';

type PostSortSelectorProps = {
  sortField: PostSortFieldsKey;
  sortOrder: SortOrder;
  onChangeSortField?: (newSort: PostSortFieldsKey) => void;
  onChangeSortOrder?: (newOrder: SortOrder) => void;
} & PropsWithClassName;

const PostSortSelector = memo((props: PostSortSelectorProps) => {
  const { sortField, sortOrder, onChangeSortField, onChangeSortOrder } = props;

  const { t } = useTranslation('pages.blog');

  const sortFieldOptions = useSortFieldOptions();
  const orderOptions = useSortOrderOptions();

  return (
    <HStack justify="center" align="center" gap="8">
      <Select<PostSortFieldsKey>
        label={t('sort.field', { defaultValue: 'Sort field', ns: 'common' })}
        options={sortFieldOptions}
        value={sortField}
        onChange={onChangeSortField}
        fullH
        className={{
          border: classNames(cls['select-border']),
          wrapper: classNames(cls['select-wrapper']),
          select: classNames(cls['select']),
        }}
        data-testid={BlogPageDataTestIds.SearchAndFilters.SortField}
      />

      <Select<SortOrder>
        label={t('sort.by', { defaultValue: 'Sort by', ns: 'common' })}
        options={orderOptions}
        value={sortOrder}
        onChange={onChangeSortOrder}
        fullH
        className={{
          border: classNames(cls['select-border']),
          wrapper: classNames(cls['select-wrapper']),
          select: classNames(cls['select']),
        }}
        data-testid={BlogPageDataTestIds.SearchAndFilters.SortOrder}
      />
    </HStack>
  );
});

export default PostSortSelector;
