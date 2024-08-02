import { PropsWithChildren, useMemo, useState } from 'react';

import { ETheme, LS_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LS_THEME_KEY) as ETheme) || ETheme.Light;

const ThemeProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [theme, setTheme] = useState<ETheme>(defaultTheme);

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
