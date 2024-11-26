import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button, ButtonSize, ButtonTheme, ButtonRounded } from 'shared/ui/Button';
import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { SignInByUsernameModal } from 'features/SignInByUsername';
import { useIsAuthorized, userActions } from 'entities/User';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { APP_NAME } from 'shared/constants/appInfo';
import { Text, TextTheme } from 'shared/ui/Text';
import { useModal } from 'shared/ui/Modal';
import classNames from 'shared/lib/classNames';
import * as cls from './Navbar.module.scss';
import { HStack } from 'shared/ui/Stack';

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

  const onClickCreatePost = useCallback(() => {
    navigate(RouterPaths[AppRoutes.POST_CREATE]);
  }, [navigate]);

  return (
    <HStack
      as="header"
      fullW
      justify="end"
      align="center"
      gap="24"
      className={classNames(cls.navbar, {}, [className])}
    >
      <Text title={APP_NAME} className={classNames(cls.logo)} theme={TextTheme.NONE} />

      {isAuthorized ? (
        <HStack justify="center" align="center" gap="16">
          <Button
            rounded={ButtonRounded.M}
            theme={ButtonTheme.OUTLINE_INVERTED}
            size={ButtonSize.L}
            onClick={onClickCreatePost}
          >
            {t('create_post', { defaultValue: 'Create post' })}
          </Button>

          <Button
            rounded={ButtonRounded.M}
            theme={ButtonTheme.OUTLINE_INVERTED}
            size={ButtonSize.L}
            onClick={onClickSignOut}
          >
            {t('sign_out.action', { defaultValue: 'Sign out' })}
          </Button>
        </HStack>
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
    </HStack>
  );
};

export default Navbar;
