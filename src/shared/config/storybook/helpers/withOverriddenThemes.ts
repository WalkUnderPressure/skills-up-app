import { StoryObj } from '@storybook/react/*';

import { DEFAULT_ALT_THEME } from 'app/providers/ThemeProvider';
import { ETheme } from 'app/providers/ThemeProvider';

// https://storybook.js.org/addons/@storybook/addon-themes?ref=storybookblog.ghost.io
const withOverriddenThemes = (config: StoryObj) => {
  return (theme: ETheme = DEFAULT_ALT_THEME): StoryObj => {
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
