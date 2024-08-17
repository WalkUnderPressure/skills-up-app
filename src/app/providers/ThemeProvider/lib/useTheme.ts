import { useContext } from 'react';

import { ETheme, ThemeContext } from './ThemeContext';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useThemeProvider() has to be used within a child of the Theme Provider');
  }

  const { theme, setTheme } = themeContext;

  const switchTheme = () => {
    let nextTheme = ETheme.Dark;

    if (theme === ETheme.Dark) {
      nextTheme = ETheme.Light;
    }

    setTheme?.(nextTheme);
  };

  return { theme, switchTheme };
}

export default useTheme;
