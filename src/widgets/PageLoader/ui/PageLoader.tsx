import classNames from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';
import * as cls from './PageLoader.module.scss';

type PageLoaderProps = {
  className?: string;
};

const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls['page-loader'], {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
