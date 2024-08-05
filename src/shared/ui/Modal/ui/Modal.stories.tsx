import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import Modal, { ModalProps } from './Modal';
import useModal from '../lib/useModal';

const ESC_CLOSE_TITLE = 'Click "Esc" to close Modal window';
const OPEN_BTN_TEXT = 'Click to open modal';
const MODAL_TITLE = 'Modal window body';

const ModalRender = (props: ModalProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>{OPEN_BTN_TEXT}</button>

      <Modal {...props} onClose={closeModal} isOpen={isOpen} />
    </div>
  );
};

const meta = {
  title: 'Shared/Modal',
  component: Modal,
  args: {
    children: <h3>{MODAL_TITLE}</h3>,
  },
  render: ModalRender,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = withOverriddenThemes({})();

export const DarkEscClose: Story = withOverriddenThemes<Story>({
  args: {
    children: <h3>{ESC_CLOSE_TITLE}</h3>,
  },
})();
