import { createContext } from 'react';

export enum ETheme {
  Dark = 'app-dark-theme',
  Light = 'app-light-theme',
  Lime = 'app-lime-theme',
}

export interface IThemeContextProps {
  theme?: ETheme;
  setTheme?: (nextTheme: ETheme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});
