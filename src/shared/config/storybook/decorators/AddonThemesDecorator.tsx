import { withThemeByDataAttribute } from '@storybook/addon-themes';

import { DEFAULT_THEME, ThemesMap } from 'app/providers/ThemeProvider';

export const InvertedThemesMap = Object.entries(ThemesMap).reduce(
  (acc, [key, value]) => {
    acc[value] = key;
    return acc;
  },
  {} as Record<string, string>,
);

// Add theme as data attribute to <html/> element
const AddonThemesDecorator = withThemeByDataAttribute({
  themes: ThemesMap,
  defaultTheme: InvertedThemesMap[DEFAULT_THEME],
  attributeName: 'data-theme',
  parentSelector: 'html',
});

export default AddonThemesDecorator;
