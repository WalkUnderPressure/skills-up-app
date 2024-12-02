import { memo } from 'react';

import classNames from 'shared/lib/classNames';
import { Page } from 'widgets/Page';

import * as cls from './AdminPanelPage.module.scss';

type AdminPanelPageProps = PropsWithClassName;

const TITLE = 'Admin panel';

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames(cls['admin-panel-page'], {}, [className])}>
      <span>{TITLE}</span>
    </Page>
  );
});

export default AdminPanelPage;
