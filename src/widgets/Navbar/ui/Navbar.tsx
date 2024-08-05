import { useTranslation } from 'react-i18next';

import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { Modal, useModal } from 'shared/ui/Modal';
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

      <Button theme={ButtonTheme.OUTLINE_INVERTED} size={ButtonSize.L} onClick={openModal}>
        {t('auth.login', { defaultValue: 'LogIn' })}
      </Button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h3>{t('auth.login', { defaultValue: 'LogIn' })}</h3>
      </Modal>
    </nav>
  );
};

export default Navbar;
