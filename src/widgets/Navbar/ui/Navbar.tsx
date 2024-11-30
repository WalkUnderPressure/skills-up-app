import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button, ButtonSize, ButtonTheme, ButtonRounded } from 'shared/ui/Button';
import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { SignInByUsernameModal } from 'features/SignInByUsername';
import {
  getIsUserAdmin,
  getUserAuthData,
  getUserId,
  useIsAuthorized,
  userActions,
} from 'entities/User';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { APP_NAME } from 'shared/constants/appInfo';
import { AvatarLetters } from 'shared/ui/Avatar';
import { Text, TextTheme } from 'shared/ui/Text';
import { useModal } from 'shared/ui/Modal';
import Dropdown from 'shared/ui/Dropdown';
import { HStack } from 'shared/ui/Stack';
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

  const userData = useAppSelector(getUserAuthData);
  const isUserAdmin = useAppSelector(getIsUserAdmin);
  const { isAuthorized } = useIsAuthorized();
  const userId = useAppSelector(getUserId);

  const isAdminPanelAvailable = isUserAdmin;

  const {
    isOpen: isSignInModalOpen,
    openModal: openSignInModal,
    closeModal: closeSignInModal,
  } = useModal();

  const onClickSignOut = useCallback(() => {
    dispatch(userActions.signOut());

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
        <Dropdown
          direction="bottom-left"
          trigger={<AvatarLetters username={userData?.username} />}
          items={[
            {
              id: 'profile',
              content: t('menu.profile', { defaultValue: 'Profile' }),
              href: `${RouterPaths[AppRoutes.PROFILE]}${userId}`,
            },
            ...(isAdminPanelAvailable
              ? [
                  {
                    id: 'admin-panel',
                    content: t('menu.admin-panel', { defaultValue: 'Admin panel' }),
                    href: RouterPaths[AppRoutes.ADMIN_PANEL],
                  },
                ]
              : []),
            {
              id: 'post',
              content: t('create_post', { defaultValue: 'Create post' }),
              onClick: onClickCreatePost,
            },
            {
              id: 'sign-out',
              content: t('sign_out.action', { defaultValue: 'Sign out' }),
              onClick: onClickSignOut,
            },
          ]}
        />
      ) : (
        <>
          <Button
            rounded={ButtonRounded.M}
            theme={ButtonTheme.OUTLINE_INVERTED}
            size={ButtonSize.L}
            onClick={openSignInModal}
          >
            {t('sign_in.action', { defaultValue: 'Sign in' })}
          </Button>

          <SignInByUsernameModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
        </>
      )}
    </HStack>
  );
};

export default Navbar;
