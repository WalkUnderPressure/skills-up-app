import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/ErrorBoundary';
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
      <AppLink to="/">{t('navbar.home')}</AppLink>
      <AppLink to="/about">{t('navbar.about')}</AppLink>

      {__IS_DEV__ && <BugButton />}
    </nav>
  );
};

export default Navbar;
