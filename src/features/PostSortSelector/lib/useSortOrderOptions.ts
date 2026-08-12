import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectOption } from '~/shared/ui/deprecated/Select';
import { SortOrder } from '~/shared/types/SortOrder';

function useSortOrderOptions() {
  const { t } = useTranslation();

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

  return orderOptions;
}

export default useSortOrderOptions;
