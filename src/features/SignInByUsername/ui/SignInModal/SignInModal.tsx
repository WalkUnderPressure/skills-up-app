import { Suspense } from 'react';

import { Loader } from '~/shared/ui/Loader';
import { Modal } from '~/shared/ui/Modal';
import SignInFormAsync from '../SignInForm/SignInForm.async';

type SignInModalProps = {
  isOpen?: boolean;
  onClose: () => void;
} & PropsWithClassName;

const SignInModal = (props: SignInModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal className={className} isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <SignInFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};

export default SignInModal;
