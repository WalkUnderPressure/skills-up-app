import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import capitalize from 'lodash.capitalize';

import { PostSortFieldsKey, PostSortFieldsMap } from '~/entities/Post';
import { SelectOption } from '~/shared/ui/deprecated/Select';

function useSortFieldOptions() {
  const { t } = useTranslation('pages.blog');

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

  return sortFieldOptions;
}

export default useSortFieldOptions;
