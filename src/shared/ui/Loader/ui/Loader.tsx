import classNames from 'shared/lib/classNames';
import * as cls from './Loader.module.scss';

type LoaderProps = {
  className?: string;
};

const Loader = (props: LoaderProps) => {
  const { className } = props;

  return <div className={classNames(cls.loader, {}, [className])} />;
};

export default Loader;
