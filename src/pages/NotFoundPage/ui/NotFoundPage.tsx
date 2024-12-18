import { useTranslation } from 'react-i18next';

import classNames from '~/shared/lib/classNames';
import { Page } from '~/widgets/Page';
import cls from './NotFoundPage.module.scss';

type NotFoundPageProps = PropsWithClassName;

const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <Page className={classNames(cls['not-found-page'], {}, [className])}>
      <h2>{t('page_not_found', { defaultValue: 'Sorry! Page not found!' })}</h2>
    </Page>
  );
};

export default NotFoundPage;
