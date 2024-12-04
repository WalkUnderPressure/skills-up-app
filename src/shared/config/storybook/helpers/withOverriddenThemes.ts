import { StoryObj } from '@storybook/react/*';

import { DEFAULT_ALT_THEME } from '~/app/providers/ThemeProvider';
import { ThemesMapKey } from '~/app/providers/ThemeProvider';
import { InvertedThemesMap } from '../decorators/AddonThemesDecorator';

// https://storybook.js.org/addons/@storybook/addon-themes?ref=storybookblog.ghost.io
const withOverriddenThemes = <T>(config: StoryObj<T>) => {
  return (theme: ThemesMapKey = DEFAULT_ALT_THEME): StoryObj<T> => {
    const nextTheme = InvertedThemesMap[theme];

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
