import { useContext } from 'react';

import { ThemesMap, ThemeContext, ThemesMapKey } from './ThemeContext';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useThemeProvider() has to be used within a child of the Theme Provider');
  }

  const { theme, setTheme } = themeContext;

  const switchTheme = () => {
    if (setTheme) {
      let nextTheme: ThemesMapKey = ThemesMap.Light;

      switch (theme) {
        case ThemesMap.Light:
          nextTheme = ThemesMap.Lime;
          break;
        case ThemesMap.Lime:
          nextTheme = ThemesMap.Dark;
          break;
        case ThemesMap.Dark:
          nextTheme = ThemesMap.Light;
          break;
      }

      setTheme(nextTheme);
    }
  };

  return { theme, switchTheme };
}

export default useTheme;
