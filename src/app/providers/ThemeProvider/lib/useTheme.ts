import { useCallback, useContext } from 'react';

import { ETheme, ThemeContext } from './ThemeContext';

function useTheme(){
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('useThemeProvider() has to be used within a child of the Theme Provider');
    }

    const { theme, setTheme } = themeContext;

    const switchTheme = useCallback(() => {
        let nextTheme = ETheme.Dark;

        if(theme === ETheme.Dark) {
            nextTheme = ETheme.Light;
        }

        setTheme(nextTheme);
    }, [theme]);

    return { theme, switchTheme };
}

export default useTheme;
