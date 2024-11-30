import { memo } from 'react';

import classNames from 'shared/lib/classNames';

import * as cls from './AdminPanelPage.module.scss';

type AdminPanelPageProps = {
  className?: string;
};

const TITLE = 'Admin panel';

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls['admin-panel-page'], {}, [className])}>
      <span>{TITLE}</span>
    </div>
  );
});

export default AdminPanelPage;
