import { StoryObj } from '@storybook/react/*';

import { DEFAULT_ALT_THEME } from 'app/providers/ThemeProvider';
import { ETheme } from 'app/providers/ThemeProvider';

// https://storybook.js.org/addons/@storybook/addon-themes?ref=storybookblog.ghost.io
const withOverriddenThemes = <T>(config: StoryObj<T>) => {
  return (theme: ETheme = DEFAULT_ALT_THEME): StoryObj<T> => {
    return {
      ...config,
      parameters: {
        ...config.parameters,
        themes: {
          themeOverride: theme,
        },
      },
    };
  };
};

export default withOverriddenThemes;
