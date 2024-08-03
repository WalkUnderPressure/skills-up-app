import { withThemeByClassName } from '@storybook/addon-themes';

import { DEFAULT_THEME, ETheme } from 'app/providers/ThemeProvider';
import classNames from 'shared/lib/classNames';

const genThemeClassName = (theme: ETheme) => classNames('app', {}, [theme]);

const ThemeDecorator = withThemeByClassName({
  themes: {
    [ETheme.Light]: genThemeClassName(ETheme.Light),
    [ETheme.Dark]: genThemeClassName(ETheme.Dark),
  },
  defaultTheme: DEFAULT_THEME,
});

export default ThemeDecorator;
