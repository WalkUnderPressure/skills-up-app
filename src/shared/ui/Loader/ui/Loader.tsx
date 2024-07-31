import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames';
import * as cls from './Loader.module.scss';

type LoaderProps = {
  className?: string;
};

const Loader = (props: LoaderProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loader, {}, [className])}>
      {`${String(t('loading', { defaultValue: 'Loading' })).toUpperCase()} . . .`}
    </div>
  );
};

export default Loader;
