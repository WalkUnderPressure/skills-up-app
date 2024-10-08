import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import capitalize from 'lodash.capitalize';

import { PostSortFieldsKey, PostSortFieldsMap } from '../../model/types/Post';
import { Select, SelectOption } from 'shared/ui/Select';
import { SortOrder } from 'shared/types/SortOrder';
import classNames from 'shared/lib/classNames';
import * as cls from './PostSortSelector.module.scss';

type PostSortSelectorProps = {
  sortField: PostSortFieldsKey;
  sortOrder: SortOrder;
  onChangeSortField?: (newSort: PostSortFieldsKey) => void;
  onChangeSortOrder?: (newOrder: SortOrder) => void;
  className?: string;
};

const PostSortSelector = memo((props: PostSortSelectorProps) => {
  const { sortField, sortOrder, onChangeSortField, onChangeSortOrder } = props;

  const { t } = useTranslation('pages.blog');

  const orderOptions = useMemo(() => {
    const items: Array<SelectOption<SortOrder>> = [
      {
        value: 'asc',
        label: t('sort.order.asc', { defaultValue: 'ascending', ns: 'common' }),
      },
      {
        value: 'desc',
        label: t('sort.order.desc', { defaultValue: 'descending', ns: 'common' }),
      },
    ];

    return items;
  }, [t]);

  const sortFieldOptions = useMemo(() => {
    const items: Array<SelectOption<PostSortFieldsKey>> = [];

    Object.values(PostSortFieldsMap).forEach((fieldName) => {
      items.push({
        value: fieldName,
        label: t(`sort.fields.${fieldName}`, { defaultValue: capitalize(fieldName) }),
      });
    });

    return items;
  }, [t]);

  return (
    <div className={classNames(cls['sort-box'])}>
      <Select<PostSortFieldsKey>
        label={t('sort.field', { defaultValue: 'Sort field', ns: 'common' })}
        options={sortFieldOptions}
        value={sortField}
        onChange={onChangeSortField}
        className={{
          border: classNames(cls['select-border']),
          wrapper: classNames(cls['select-wrapper']),
          select: classNames(cls['select']),
        }}
      />

      <Select<SortOrder>
        label={t('sort.by', { defaultValue: 'Sort by', ns: 'common' })}
        options={orderOptions}
        value={sortOrder}
        onChange={onChangeSortOrder}
        className={{
          border: classNames(cls['select-border']),
          wrapper: classNames(cls['select-wrapper']),
          select: classNames(cls['select']),
        }}
      />
    </div>
  );
});

export default PostSortSelector;
