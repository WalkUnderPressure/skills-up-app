import { memo } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import * as cls from './ThemeSwitcher.module.scss';

import ThemeSwitch from 'shared/assets/icons/theme-switch.svg';

type ThemeSwitcherProps = {
  className?: string;
};

const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;

  const { switchTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls['theme-switcher'], {}, [className])}
      onClick={switchTheme}
    >
      <ThemeSwitch transform="scale(0.7)" fill="var(--theme-switch-bg)" />
    </Button>
  );
});

export default ThemeSwitcher;
