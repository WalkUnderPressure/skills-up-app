import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { AppLink } from 'shared/ui/AppLink';
import classNames from 'shared/lib/classNames'
import * as cls from './Navbar.module.scss'

type NavbarProps = {
    className?: string,
}

function Navbar(props: NavbarProps) {
    const { className } = props

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
        <ThemeSwitcher />

        <AppLink to='/'>Home</AppLink>
        <AppLink to='/about'>About</AppLink>
    </nav>
  )
}

export default Navbar
