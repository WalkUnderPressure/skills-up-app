import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from '~/shared/lib/classNames';
import { Page } from '~/widgets/Page';
import * as cls from './ForbiddenPage.module.scss';

type ForbiddenPageProps = PropsWithClassName;

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <Page className={classNames(cls['forbidden-page'], {}, [className])}>
      <h2>{t('page_forbidden', { defaultValue: 'You cannot access this page' })}</h2>
    </Page>
  );
});

export default ForbiddenPage;
