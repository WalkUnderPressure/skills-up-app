import { useTranslation } from 'react-i18next';

import { Button, ButtonSize, ButtonTheme, ButtonRounded } from '~/shared/ui/deprecated/Button';
import { SignInByUsernameModal } from '~/features/SignInByUsername';
import { NotificationCenter } from '~/features/NotificationCenter';
import useIsAuthorized from '~/shared/lib/hooks/useIsAuthorized';
import { useToggleFeatures } from '~/entities/FeatureFlags';
import { AccountMenu } from '~/features/AccountMenu';
import { SignInBtnDataTestId } from '../constants';
import { useModalState } from '~/shared/ui/deprecated/Modal';
import { HStack } from '~/shared/ui/redesigned/Stack';
import classNames from '~/shared/lib/classNames';
import cls from './Navbar.module.scss';

type NavbarRedesignedProps = PropsWithClassName;

const NavbarRedesigned = (props: NavbarRedesignedProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const isAuthorized = useIsAuthorized();

  const {
    isOpen: isSignInModalOpen,
    openModal: openSignInModal,
    closeModal: closeSignInModal,
  } = useModalState();

  const NotificationCenterEl = useToggleFeatures({
    feature: 'notifications',
    on: () => <NotificationCenter />,
    off: () => null,
  });

  return (
    <HStack
      as="header"
      fullW
      justify="end"
      align="center"
      gap="24"
      className={classNames(cls['navbar-redesigned'], {}, [className])}
    >
      {isAuthorized ? (
        <HStack gap="16">
          {NotificationCenterEl}

          <AccountMenu />
        </HStack>
      ) : (
        <>
          <Button
            rounded={ButtonRounded.M}
            theme={ButtonTheme.OUTLINE}
            size={ButtonSize.L}
            onClick={openSignInModal}
            data-testid={SignInBtnDataTestId}
          >
            {t('sign_in.action', { defaultValue: 'Sign in' })}
          </Button>

          <SignInByUsernameModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
        </>
      )}
    </HStack>
  );
};

export default NavbarRedesigned;
