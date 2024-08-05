import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { ETheme, LS_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

export const DEFAULT_ALT_THEME = ETheme.Dark;
export const DEFAULT_THEME = ETheme.Light;

const defaultTheme = (localStorage.getItem(LS_THEME_KEY) as ETheme) || DEFAULT_THEME;

type ThemeProviderProps = {
  initTheme?: ETheme;
} & PropsWithChildren;

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initTheme } = props;

  const updateThemeInExternalStorages = (nextTheme: ETheme) => {
    localStorage.setItem(LS_THEME_KEY, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  const [theme, setTheme] = useState<ETheme>(() => {
    const themeInitValue = initTheme || defaultTheme;

    updateThemeInExternalStorages(themeInitValue);

    return themeInitValue;
  });

  const updateTheme = useCallback((nextTheme: ETheme) => {
    setTheme(() => {
      updateThemeInExternalStorages(nextTheme);
      return nextTheme;
    });
  }, []);

  const defaultProviderProps = useMemo(
    () => ({ theme, setTheme: updateTheme }),
    [theme, updateTheme],
  );

  return <ThemeContext.Provider value={defaultProviderProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
