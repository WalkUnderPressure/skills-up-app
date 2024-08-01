import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames';
import * as cls from './NotFoundPage.module.scss';

type NotFoundPageProps = {
  className?: string;
};

const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls['not-found-page'], {}, [className])}>
      <h2>{t('page_not_found', { defaultValue: 'Sorry! Page not found!' })}</h2>
    </div>
  );
};

export default NotFoundPage;
