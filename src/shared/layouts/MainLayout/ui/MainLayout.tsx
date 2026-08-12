import { ReactNode } from 'react';
import classNames from '~/shared/lib/classNames';
import cls from './MainLayout.module.scss';

type MainLayoutProps = {
  content: ReactNode;
  sidebar: ReactNode;
  header: ReactNode;
  toolbar?: ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  const { content, sidebar, header, toolbar } = props;

  return (
    <div className={classNames(cls.layout)}>
      <div className={classNames(cls.sidebar)}>{sidebar}</div>

      <div className={classNames(cls.content)}>{content}</div>

      <div className={classNames(cls.rightbar)}>
        <div className={classNames(cls.header)}>{header}</div>

        {Boolean(toolbar) && <div className={classNames(cls.toolbar)}>{toolbar}</div>}
      </div>
    </div>
  );
};

export default MainLayout;
