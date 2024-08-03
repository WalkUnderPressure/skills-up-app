import { DEFAULT_THEME, ETheme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import * as cls from './ThemeSwitcher.module.scss';

import ThemeLight from 'shared/assets/icons/theme-light.svg';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';

type ThemeSwitcherProps = {
  className?: string;
};

const THEME_ICONS = {
  [ETheme.Light]: <ThemeLight transform="scale(0.7)" />,
  [ETheme.Dark]: <ThemeDark transform="scale(0.7)" />,
};

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;

  const { theme = DEFAULT_THEME, switchTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls['theme-switcher'], {}, [className])}
      onClick={switchTheme}
    >
      {THEME_ICONS[theme]}
    </Button>
  );
};

export default ThemeSwitcher;
