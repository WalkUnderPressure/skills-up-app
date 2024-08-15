import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from 'shared/config/tests/providers/renderWithProviders';
import { CounterDataTestIds } from './Counter.test-ids';
import Counter from './Counter';

describe('Counter', () => {
  test('default', () => {
    const initValue = 33;
    const expectedResult = String(initValue);

    renderWithProviders(<Counter {...CounterDataTestIds} />, {
      store: { initialState: { counter: { value: initValue } } },
    });

    const actualResult = screen.getByTestId(CounterDataTestIds.valueDataTestId).textContent;

    expect(actualResult).toEqual(expectedResult);
  });

  test('increment', () => {
    const initValue = 24;
    const expectedResult = String(initValue + 1);

    renderWithProviders(<Counter {...CounterDataTestIds} />, {
      store: { initialState: { counter: { value: initValue } } },
    });

    const increaseBtn = screen.getByTestId(CounterDataTestIds.incrementDataTestId);
    fireEvent.click(increaseBtn);

    const actualResult = screen.getByTestId(CounterDataTestIds.valueDataTestId).textContent;

    expect(actualResult).toEqual(expectedResult);
  });

  test('decrement', () => {
    const initValue = 87;
    const expectedResult = String(initValue - 1);

    renderWithProviders(<Counter {...CounterDataTestIds} />, {
      store: { initialState: { counter: { value: initValue } } },
    });

    const decreaseBtn = screen.getByTestId(CounterDataTestIds.decrementDataTestId);
    fireEvent.click(decreaseBtn);

    const actualResult = screen.getByTestId(CounterDataTestIds.valueDataTestId).textContent;

    expect(actualResult).toEqual(expectedResult);
  });
});
