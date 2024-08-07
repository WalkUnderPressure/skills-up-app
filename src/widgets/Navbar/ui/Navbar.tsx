import { useTranslation } from 'react-i18next';

import { SignInByUsernameModal } from 'features/SignInByUsername';
import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { Button, ButtonSize, ButtonTheme, ButtonRounded } from 'shared/ui/Button';
import { useModal } from 'shared/ui/Modal';
import { AppLink } from 'shared/ui/AppLink';
import classNames from 'shared/lib/classNames';
import * as cls from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <AppLink to={RouterPaths[AppRoutes.HOME]}>
        {t('navbar.home', { defaultValue: 'Home' })}
      </AppLink>

      <Button
        rounded={ButtonRounded.M}
        theme={ButtonTheme.OUTLINE_INVERTED}
        size={ButtonSize.L}
        onClick={openModal}
      >
        {t('sign_in.action', { defaultValue: 'Sign in' })}
      </Button>

      <SignInByUsernameModal isOpen={isOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
