import classNames from '~/shared/lib/classNames';
import cls from './Loader.module.scss';

type LoaderProps = PropsWithClassName;

/**
 * Use new UI elements from 'shared/ui/redesigned' folder
 * @deprecated
 */
const Loader = (props: LoaderProps) => {
  const { className } = props;

  return <div className={classNames(cls.loader, {}, [className])} />;
};

export default Loader;
