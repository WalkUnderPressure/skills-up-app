import classNames from 'shared/lib/classNames';
import * as cls from './[FTName].module.scss';

type [FTName]Props = {
  className?: string;
};

const [FTName] = (props: [FTName]Props) => {
  const { className } = props;

  return (
    <div className={classNames(cls['[FTName | kebabcase]'], {}, [className])}>
      <span />
    </div>
  );
};

export default [FTName];
