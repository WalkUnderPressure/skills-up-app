import { StoryContext, StoryFn } from '@storybook/react/*';

import { DEFAULT_THEME, ThemeProvider } from 'app/providers/ThemeProvider';

const StoryThemeDecorator = (Story: StoryFn, ctx: StoryContext) => {
  const theme = ctx.parameters?.themes?.themeOverride || DEFAULT_THEME;

  return (
    <ThemeProvider initTheme={theme}>
      <Story />
    </ThemeProvider>
  );
};

export default StoryThemeDecorator;
