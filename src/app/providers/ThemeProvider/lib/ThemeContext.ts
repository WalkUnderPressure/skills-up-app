import { createContext } from 'react';

export const ThemesMap = Object.freeze({
  Dark: 'app-dark-theme',
  Light: 'app-light-theme',
  Lime: 'app-lime-theme',
});

export type ThemesMapKey = (typeof ThemesMap)[keyof typeof ThemesMap];

export interface IThemeContextProps {
  theme?: ThemesMapKey;
  setTheme?: (nextTheme: ThemesMapKey) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});
