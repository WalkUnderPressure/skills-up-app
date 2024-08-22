import { withThemeByDataAttribute } from '@storybook/addon-themes';

import { DEFAULT_THEME, ETheme } from 'app/providers/ThemeProvider';
import { getEnumRecord } from 'shared/lib/helpers/mapEnum';

export const ThemesKeys = Object.entries(getEnumRecord(ETheme)).reduce(
  (acc, [key, value]) => {
    acc[value] = key;
    return acc;
  },
  {} as Record<string, string>,
);

// Add theme as data attribute to <html/> element
const AddonThemesDecorator = withThemeByDataAttribute({
  themes: getEnumRecord(ETheme),
  defaultTheme: ThemesKeys[DEFAULT_THEME],
  attributeName: 'data-theme',
  parentSelector: 'html',
});

export default AddonThemesDecorator;
