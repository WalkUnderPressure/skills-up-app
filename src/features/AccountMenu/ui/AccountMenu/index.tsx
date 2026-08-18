import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ToggleFeatures } from '~/entities/User';

import { useIsUserAdmin, useUserAuthData, useUserId, useUserActions } from '~/entities/User';
import {
  getRouteAdminPanel,
  getRouteHome,
  getRoutePostCreate,
  getRouteProfile,
} from '~/shared/constants/appRoutes';
import { Avatar as AvatarDeprecated, AvatarSize } from '~/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '~/shared/ui/deprecated/Popups';
import { Avatar } from '~/shared/ui/redesigned/Avatar';
import { Dropdown } from '~/shared/ui/redesigned/Popups';
import { DropdownItem } from '~/shared/ui/redesigned/Popups';

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

  const items: Array<DropdownItem> = [
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
  ];

  return (
    <ToggleFeatures
      feature="redesign"
      on={
        <Dropdown
          direction="bottom-left"
          trigger={<Avatar src={userData?.avatar ?? ''} size="xs" />}
          items={items}
          className={className}
        />
      }
      off={
        <DropdownDeprecated
          direction="bottom-left"
          trigger={<AvatarDeprecated src={userData?.avatar ?? ''} size={AvatarSize.XS} />}
          items={items}
          className={className}
        />
      }
    />
  );
});

export default AccountMenu;
