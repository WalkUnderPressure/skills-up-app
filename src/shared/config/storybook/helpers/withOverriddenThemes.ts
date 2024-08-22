import { StoryObj } from '@storybook/react/*';

import { DEFAULT_ALT_THEME } from 'app/providers/ThemeProvider';
import { ETheme } from 'app/providers/ThemeProvider';
import { ThemesKeys } from '../decorators/AddonThemesDecorator';

// https://storybook.js.org/addons/@storybook/addon-themes?ref=storybookblog.ghost.io
const withOverriddenThemes = <T>(config: StoryObj<T>) => {
  return (theme: ETheme = DEFAULT_ALT_THEME): StoryObj<T> => {
    const nextTheme = ThemesKeys[theme];

    return {
      ...config,
      parameters: {
        ...config.parameters,
        themes: {
          themeOverride: nextTheme,
        },
      },
    };
  };
};

export default withOverriddenThemes;
