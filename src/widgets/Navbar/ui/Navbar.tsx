import { useTranslation } from 'react-i18next';

import { AppLink } from 'shared/ui/AppLink';
import classNames from 'shared/lib/classNames'
import * as cls from './Navbar.module.scss'

type NavbarProps = {
    className?: string,
}

function Navbar(props: NavbarProps) {
  const { className } = props

  const { t } = useTranslation()

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <AppLink to='/'>{t('navbar.home')}</AppLink>
      <AppLink to='/about'>{t('navbar.about')}</AppLink>
    </nav>
  )
}

export default Navbar
