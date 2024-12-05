import { useTranslation } from 'react-i18next';

import classNames from '~/shared/lib/classNames';
import { Button } from '~/shared/ui/Button';
import cls from './PageErrorBanner.module.scss';
import { VStack } from '~/shared/ui/Stack';

type PageErrorBannerProps = PropsWithClassName;

const PageErrorBanner = (props: PageErrorBannerProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <VStack
      align="center"
      justify="center"
      gap="24"
      className={classNames(cls['page-error-banner'], {}, [className])}
    >
      <h3>
        {t('error_boundary.title', {
          defaultValue: 'Sorry, unexpected error occurred! Try to reload page.',
        })}
      </h3>

      <Button onClick={reloadPage} className={cls['page-error-banner__btn']}>
        {t('error_boundary.action-btn', { defaultValue: 'Reload page' })}
      </Button>
    </VStack>
  );
};

export default PageErrorBanner;
