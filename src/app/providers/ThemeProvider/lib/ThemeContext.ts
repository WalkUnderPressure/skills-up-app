import { createContext } from 'react';

export const LS_THEME_KEY = 'theme';

export enum ETheme {
    Dark = 'dark',
    Light = 'light',
}

export interface IThemeContextProps {
    theme?: ETheme,
    setTheme?: (nextTheme: ETheme) => void,
}

export const ThemeContext = createContext<IThemeContextProps>({});
