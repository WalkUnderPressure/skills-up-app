import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button, ButtonSize, ButtonTheme, ButtonRounded } from 'shared/ui/Button';
import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { SignInByUsernameModal } from 'features/SignInByUsername';
import { useIsAuthorized, userActions } from 'entities/User';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { useModal } from 'shared/ui/Modal';
import classNames from 'shared/lib/classNames';
import * as cls from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuthorized } = useIsAuthorized();

  const {
    isOpen: isSignInModalOpen,
    openModal: openSignInModal,
    closeModal: closeSignInModal,
  } = useModal();

  const onClickSignOut = useCallback(async () => {
    await dispatch(userActions.signOut());

    navigate(RouterPaths[AppRoutes.HOME]);
  }, [dispatch, navigate]);

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      {isAuthorized ? (
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
    </header>
  );
};

export default Navbar;
