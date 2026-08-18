import { memo } from 'react';

import { useTheme } from '~/app/providers/ThemeProvider';
import { Button, ButtonTheme } from '~/shared/ui/deprecated/Button';
import classNames from '~/shared/lib/classNames';

import ThemeSwitch from '~/shared/assets/icons/theme-switch.svg';
import ThemeIcon from '~/shared/assets/icons/theme.svg';
import { useToggleFeatures } from '~/entities/User';

type ThemeSwitcherProps = PropsWithClassName;

const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;

  const { switchTheme } = useTheme();

  const ThemeIconEl = useToggleFeatures({
    feature: 'redesign',
    on: () => <ThemeIcon width={32} height={32} fill="var(--redesigned-icon)" />,
    off: () => <ThemeSwitch width={32} height={32} fill="var(--theme-switch-bg)" />,
  });

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={switchTheme}
    >
      {ThemeIconEl}
    </Button>
  );
});

export default ThemeSwitcher;
