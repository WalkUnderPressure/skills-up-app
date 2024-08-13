import { Modal } from 'shared/ui/Modal';
import SignInFormAsync from '../SignInForm/SignInForm.async';

type SignInModalProps = {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

const SignInModal = (props: SignInModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal className={className} isOpen={isOpen} onClose={onClose}>
      <SignInFormAsync />
    </Modal>
  );
};

export default SignInModal;
