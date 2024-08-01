import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';

// Component for testing ErrorBoundary
const BugButton = () => {
  const { t } = useTranslation();

  const [withError, setWithError] = useState(false);

  useEffect(() => {
    if (withError) {
      throw new Error('Test error!');
    }
  }, [withError]);

  const throwError = () => {
    setWithError(true);
  };

  return (
    <Button onClick={throwError}>
      {t('error_boundary.throw_error', { defaultValue: 'Throw error!' })}
    </Button>
  );
};

export default BugButton;
