import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import * as cls from './PageErrorBanner.module.scss';

type PageErrorBannerProps = {
  className?: string;
};

const PageErrorBanner = (props: PageErrorBannerProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls['page-error-banner'], {}, [className])}>
      <h3>
        {t('error_boundary.title', {
          defaultValue: 'Sorry, unexpected error occurred! Try to reload page.',
        })}
      </h3>

      <Button onClick={reloadPage} className={cls['page-error-banner__btn']}>
        {t('error_boundary.action-btn', { defaultValue: 'Reload page' })}
      </Button>
    </div>
  );
};

export default PageErrorBanner;
