import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import Modal, { ModalProps } from './Modal';
import useModalState from '../lib/useModalState';

const ESC_CLOSE_TITLE = 'Click "Esc" to close Modal window';
const OPEN_BTN_TEXT = 'Click to open modal';
const MODAL_TITLE = 'Modal window body';

const ModalRender = (props: ModalProps) => {
  const { isOpen, openModal, closeModal } = useModalState();

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
    // mock, because we push real handler in ModalRender
    onClose: () => {},
  },
  render: ModalRender,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;

export const DarkEscClose = withOverriddenThemes<Story>({
  args: {
    children: <h3>{ESC_CLOSE_TITLE}</h3>,
  },
})() satisfies Story;
