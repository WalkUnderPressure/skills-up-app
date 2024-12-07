import { useTranslation } from 'react-i18next';

import { Button, ButtonSize, ButtonTheme, ButtonRounded } from '~/shared/ui/Button';
import { SignInByUsernameModal } from '~/features/SignInByUsername';
import { NotificationCenter } from '~/features/NotificationCenter';
import useIsAuthorized from '~/shared/lib/hooks/useIsAuthorized';
import { APP_NAME } from '~/shared/constants/appInfo';
import { AccountMenu } from '~/features/AccountMenu';
import { Text, TextTheme } from '~/shared/ui/Text';
import { useModalState } from '~/shared/ui/Modal';
import { HStack } from '~/shared/ui/Stack';
import classNames from '~/shared/lib/classNames';
import cls from './Navbar.module.scss';

type NavbarProps = PropsWithClassName;

const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const { isAuthorized } = useIsAuthorized();

  const {
    isOpen: isSignInModalOpen,
    openModal: openSignInModal,
    closeModal: closeSignInModal,
  } = useModalState();

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
        <HStack gap="16">
          <NotificationCenter />

          <AccountMenu />
        </HStack>
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
