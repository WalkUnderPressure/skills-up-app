type TextDataTestIdProps = Partial<{
  titleDataTestId: string;
  textDataTestId: string;
}>;

const TextDataTestIds: Required<TextDataTestIdProps> = Object.freeze({
  titleDataTestId: 'TextTitleDataTestId',
  textDataTestId: 'TextTextDataTestId',
});

export { TextDataTestIds, TextDataTestIdProps };
