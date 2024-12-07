import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getIsUserAdmin, getUserAuthData, getUserId, userActions } from '~/entities/User';
import { useAppDispatch, useAppSelector } from '~/app/providers/StoreProvider';
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isUserAdmin = useAppSelector(getIsUserAdmin);
  const userData = useAppSelector(getUserAuthData);
  const userId = useAppSelector(getUserId);

  const isAdminPanelAvailable = isUserAdmin;

  const onClickSignOut = useCallback(() => {
    dispatch(userActions.signOut());

    navigate(getRouteHome());
  }, [dispatch, navigate]);

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
