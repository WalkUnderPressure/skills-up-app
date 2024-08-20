import { useContext } from 'react';

import { ETheme, ThemeContext } from './ThemeContext';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useThemeProvider() has to be used within a child of the Theme Provider');
  }

  const { theme, setTheme } = themeContext;

  const switchTheme = () => {
    if (setTheme) {
      let nextTheme = ETheme.Light;

      switch (theme) {
        case ETheme.Light:
          nextTheme = ETheme.Lime;
          break;
        case ETheme.Lime:
          nextTheme = ETheme.Dark;
          break;
        case ETheme.Dark:
          nextTheme = ETheme.Light;
          break;
      }

      setTheme(nextTheme);
    }
  };

  return { theme, switchTheme };
}

export default useTheme;
