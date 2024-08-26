import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function useDateTransformer(dateInSeconds?: number) {
  const { i18n } = useTranslation();

  const dateToShow = useMemo(() => {
    let result = '';

    if (dateInSeconds) {
      result = new Date(dateInSeconds).toLocaleDateString(i18n.language);
    }

    return result;
  }, [dateInSeconds, i18n.language]);

  return dateToShow;
}

export default useDateTransformer;
