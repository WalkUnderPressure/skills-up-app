import { useTranslation } from 'react-i18next';

import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { AppLink } from 'shared/ui/AppLink';
import classNames from 'shared/lib/classNames';
import * as cls from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <AppLink to={RouterPaths[AppRoutes.HOME]}>
        {t('navbar.home', { defaultValue: 'Home' })}
      </AppLink>
    </nav>
  );
};

export default Navbar;
