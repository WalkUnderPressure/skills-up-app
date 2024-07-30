import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import classNames from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import * as cls from './ThemeSwitcher.module.scss';

import ThemeLight from 'shared/assets/icons/theme-light.svg'
import ThemeDark from 'shared/assets/icons/theme-dark.svg'

type ThemeSwitcherProps = {
    className?: string,
}

const THEME_ICONS = {
    [ETheme.Light]: <ThemeLight transform='scale(0.7)' />,
    [ETheme.Dark]: <ThemeDark transform='scale(0.7)' />,
}

function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { className } = props
    
    const { theme, switchTheme } = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={switchTheme}
        >
            {THEME_ICONS[theme]}
        </Button>
    )
}

export default ThemeSwitcher
