import classNames from '~/shared/lib/classNames';
import cls from './Loader.module.scss';

type LoaderProps = PropsWithClassName;

const Loader = (props: LoaderProps) => {
  const { className } = props;

  return <div className={classNames(cls.loader, {}, [className])} />;
};

export default Loader;
