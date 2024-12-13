import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useIsUserAdmin, useUserAuthData, useUserId, useUserActions } from '~/entities/User';
import {
  getRouteAdminPanel,
  getRouteHome,
  getRoutePostCreate,
  getRouteProfile,
} from '~/shared/constants/appRoutes';
import { AvatarLetters, AvatarSize } from '~/shared/ui/Avatar';
import { Dropdown } from '~/shared/ui/Popups';

export type AccountMenuProps = PropsWithClassName;

const AccountMenu = memo((props: AccountMenuProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();

  const isUserAdmin = useIsUserAdmin();
  const userData = useUserAuthData();
  const userId = useUserId();

  const isAdminPanelAvailable = isUserAdmin;

  const { signOut } = useUserActions();

  const onClickSignOut = useCallback(() => {
    signOut();

    navigate(getRouteHome());
  }, [signOut, navigate]);

  const onClickCreatePost = useCallback(() => {
    navigate(getRoutePostCreate());
  }, [navigate]);

  if (!userData || !userId) {
    return null;
  }

  return (
    <Dropdown
      direction="bottom-left"
      trigger={<AvatarLetters username={userData?.username} size={AvatarSize.XS} />}
      items={[
        {
          id: 'profile',
          content: t('menu.profile', { defaultValue: 'Profile' }),
          href: getRouteProfile(userId),
        },
        ...(isAdminPanelAvailable
          ? [
              {
                id: 'admin-panel',
                content: t('menu.admin-panel', { defaultValue: 'Admin panel' }),
                href: getRouteAdminPanel(),
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
      className={className}
    />
  );
});

export default AccountMenu;
