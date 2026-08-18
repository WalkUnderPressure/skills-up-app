import { memo } from 'react';

import LangSwitcherDeprecated from './LangSwitcherDeprecated';
import { ToggleFeatures } from '~/entities/User';
import cls from './LangSwitcher.module.scss';

type LangSwitcherProps = {
  short?: boolean;
};

const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { short = false } = props;

  return (
    <ToggleFeatures
      feature="redesign"
      on={
        <LangSwitcherDeprecated
          short={true}
          wrapperClassName={cls['redesigned-wrapper']}
          borderClassName={cls['redesigned-border']}
          selectClassName={cls['redesigned-select']}
        />
      }
      off={<LangSwitcherDeprecated short={short} />}
    />
  );
});

export default LangSwitcher;
