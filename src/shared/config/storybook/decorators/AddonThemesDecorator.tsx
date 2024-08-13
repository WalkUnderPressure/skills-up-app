import { withThemeByDataAttribute } from '@storybook/addon-themes';

import { DEFAULT_THEME, ETheme } from 'app/providers/ThemeProvider';

// Add theme as data attribute to <html/> element
const AddonThemesDecorator = withThemeByDataAttribute({
  themes: {
    [ETheme.Light]: ETheme.Light,
    [ETheme.Dark]: ETheme.Dark,
  },
  defaultTheme: DEFAULT_THEME,
  attributeName: 'data-theme',
  parentSelector: 'html',
});

export default AddonThemesDecorator;
