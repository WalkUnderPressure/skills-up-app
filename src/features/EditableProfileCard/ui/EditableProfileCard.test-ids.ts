type EditableProfileCardDataTestIdProps = Partial<{
  editBtnDataTestId: string;
  resetBtnDataTestId: string;
  saveBtnDataTestId: string;
}>;

const EditableProfileDataTestIds = Object.freeze({
  editBtnDataTestId: 'EditableProfileCardEditBtn',
  resetBtnDataTestId: 'EditableProfileCardResetBtn',
  saveBtnDataTestId: 'EditableProfileCardSaveBtn',
} satisfies Required<EditableProfileCardDataTestIdProps>);

export { EditableProfileDataTestIds };
export type { EditableProfileCardDataTestIdProps };
