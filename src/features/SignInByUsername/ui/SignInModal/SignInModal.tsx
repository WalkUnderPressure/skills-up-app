import { Modal } from 'shared/ui/Modal';
import SignInForm from '../SignInForm/SignInForm';

type SignInModalProps = {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

const SignInModal = (props: SignInModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal className={className} isOpen={isOpen} onClose={onClose}>
      <SignInForm />
    </Modal>
  );
};

export default SignInModal;
