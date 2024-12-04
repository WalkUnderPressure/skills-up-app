import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getIsUserAdmin, getUserAuthData, getUserId, userActions } from '~/entities/User';
import { useAppDispatch, useAppSelector } from '~/app/providers/StoreProvider';
import { AppRoutes, RouterPaths } from '~/shared/config/routerConfig';
import { AvatarLetters } from '~/shared/ui/Avatar';
import { Dropdown } from '~/shared/ui/Popups';

type AccountMenuProps = PropsWithClassName;

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

    navigate(RouterPaths[AppRoutes.HOME]);
  }, [dispatch, navigate]);

  const onClickCreatePost = useCallback(() => {
    navigate(RouterPaths[AppRoutes.POST_CREATE]);
  }, [navigate]);

  if (!userData || !userId) {
    return null;
  }

  return (
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
      className={className}
    />
  );
});

export default AccountMenu;
