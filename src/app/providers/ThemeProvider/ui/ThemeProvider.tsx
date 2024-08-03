import { PropsWithChildren, useMemo, useState } from 'react';

import { ETheme, LS_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

export const DEFAULT_ALT_THEME = ETheme.Dark;
export const DEFAULT_THEME = ETheme.Light;

const defaultTheme = (localStorage.getItem(LS_THEME_KEY) as ETheme) || DEFAULT_THEME;

type ThemeProviderProps = {
  initTheme?: ETheme;
} & PropsWithChildren;

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initTheme } = props;

  const [theme, setTheme] = useState<ETheme>(initTheme || defaultTheme);

  const updateTheme = (nextTheme: ETheme) => {
    setTheme(() => {
      localStorage.setItem(LS_THEME_KEY, nextTheme);
      return nextTheme;
    });
  };

  const defaultProviderProps = useMemo(() => ({ theme, setTheme: updateTheme }), [theme]);

  return <ThemeContext.Provider value={defaultProviderProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
