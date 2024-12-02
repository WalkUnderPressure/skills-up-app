import { memo } from 'react';

import classNames from 'shared/lib/classNames';
import * as cls from './[FTName].module.scss';

type [FTName]Props = PropsWithClassName;

const [FTName] = memo((props: [FTName]Props) => {
  const { className } = props;

  return (
    <div className={classNames(cls['[FTName | kebabcase]'], {}, [className])}>
      <span />
    </div>
  );
});

export default [FTName];
