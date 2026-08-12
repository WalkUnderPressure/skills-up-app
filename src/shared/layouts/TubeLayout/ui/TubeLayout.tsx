import { ReactNode } from 'react';
import classNames from '~/shared/lib/classNames';
import cls from './TubeLayout.module.scss';

type TubeLayoutProps = {
  content: ReactNode;
  leftbar?: ReactNode;
  rightbar?: ReactNode;
};

const TubeLayout = (props: TubeLayoutProps) => {
  const { content, leftbar, rightbar } = props;

  return (
    <div className={classNames(cls.layout)}>
      {Boolean(leftbar) && <div className={classNames(cls.leftbar)}>{leftbar}</div>}

      <div className={classNames(cls.content)}>{content}</div>

      {Boolean(rightbar) && <div className={classNames(cls.rightbar)}>{rightbar}</div>}
    </div>
  );
};

export default TubeLayout;
