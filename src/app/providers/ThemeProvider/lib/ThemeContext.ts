import { createContext } from 'react';

export enum ETheme {
  Dark = 'app-dark',
  Light = 'app-light',
}

export interface IThemeContextProps {
  theme?: ETheme;
  setTheme?: (nextTheme: ETheme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});
