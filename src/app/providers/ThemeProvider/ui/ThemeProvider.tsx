import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import getSafeLocalStorageValue from '~/shared/lib/helpers/getSafeValueFromLS';
import { LS_THEME_KEY } from '~/shared/constants/localStorage';
import { ThemesMap, ThemeContext, ThemesMapKey } from '../lib/ThemeContext';

export const DEFAULT_ALT_THEME = ThemesMap.Dark;
export const DEFAULT_THEME = ThemesMap.Light;

const defaultTheme = getSafeLocalStorageValue<ThemesMapKey>(LS_THEME_KEY, ThemesMap, DEFAULT_THEME);

type ThemeProviderProps = {
  initTheme?: ThemesMapKey;
} & PropsWithChildren;

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initTheme } = props;

  const updateThemeInExternalStorages = (nextTheme: ThemesMapKey) => {
    localStorage.setItem(LS_THEME_KEY, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  const [theme, setTheme] = useState<ThemesMapKey>(() => {
    const themeInitValue = initTheme || defaultTheme;

    updateThemeInExternalStorages(themeInitValue);

    return themeInitValue;
  });

  const updateTheme = useCallback((nextTheme: ThemesMapKey) => {
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
