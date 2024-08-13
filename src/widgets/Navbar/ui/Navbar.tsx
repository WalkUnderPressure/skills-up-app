import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { SignInByUsernameModal } from 'features/SignInByUsername';
import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { Button, ButtonSize, ButtonTheme, ButtonRounded } from 'shared/ui/Button';
import { useModal } from 'shared/ui/Modal';
import { AppLink } from 'shared/ui/AppLink';
import classNames from 'shared/lib/classNames';
import * as cls from './Navbar.module.scss';
import { getUserAuthData, userActions } from 'entities/User';

type NavbarProps = {
  className?: string;
};

const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userAuthData = useSelector(getUserAuthData);

  const {
    isOpen: isSignInModalOpen,
    openModal: openSignInModal,
    closeModal: closeSignInModal,
  } = useModal();

  const onClickSignOut = useCallback(() => {
    dispatch(userActions.signOut());
  }, [dispatch]);

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <AppLink to={RouterPaths[AppRoutes.HOME]}>
        {t('navbar.home', { defaultValue: 'Home' })}
      </AppLink>

      {userAuthData ? (
        <Button
          rounded={ButtonRounded.M}
          theme={ButtonTheme.OUTLINE_INVERTED}
          size={ButtonSize.L}
          onClick={onClickSignOut}
        >
          {t('sign_out.action', { defaultValue: 'Sign out' })}
        </Button>
      ) : (
        <React.Fragment>
          <Button
            rounded={ButtonRounded.M}
            theme={ButtonTheme.OUTLINE_INVERTED}
            size={ButtonSize.L}
            onClick={openSignInModal}
          >
            {t('sign_in.action', { defaultValue: 'Sign in' })}
          </Button>

          <SignInByUsernameModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
        </React.Fragment>
      )}
    </nav>
  );
};

export default Navbar;
