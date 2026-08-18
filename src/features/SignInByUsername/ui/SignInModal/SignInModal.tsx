import { Suspense } from 'react';

import { Loader as LoaderDeprecated } from '~/shared/ui/deprecated/Loader';
import { Loader as LoaderRedesigned } from '~/shared/ui/redesigned/Loader';
import { Modal as ModalDeprecated } from '~/shared/ui/deprecated/Modal';
import { Modal as ModalRedesigned } from '~/shared/ui/redesigned/Modal';

import SignInFormAsync from '../SignInForm/SignInForm.async';
import { useToggleFeatures } from '~/entities/User';

type SignInModalProps = {
  isOpen?: boolean;
  onClose: () => void;
} & PropsWithClassName;

const SignInModal = (props: SignInModalProps) => {
  const { className, isOpen, onClose } = props;

  const { Loader, Modal } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      Loader: LoaderRedesigned,
      Modal: ModalRedesigned,
    }),
    off: () => ({
      Loader: LoaderDeprecated,
      Modal: ModalDeprecated,
    }),
  });

  return (
    <Modal className={className} isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <SignInFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};

export default SignInModal;
