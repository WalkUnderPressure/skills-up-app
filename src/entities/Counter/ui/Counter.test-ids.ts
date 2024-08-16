type CounterDataTestIdProps = {
  decrementDataTestId: string;
  valueDataTestId: string;
  incrementDataTestId: string;
};

const CounterDataTestIds: CounterDataTestIdProps = Object.freeze({
  valueDataTestId: 'CounterValueDataTestId',
  incrementDataTestId: 'CounterIncrementBtnDataTestId',
  decrementDataTestId: 'CounterDecrementBtnDataTestId',
});

export { CounterDataTestIds, CounterDataTestIdProps };
