import { counterActions, counterReducer } from '../slices/counterSlice';
import CounterStateSchema from '../types/CounterStateSchema';

describe('counterSlice', () => {
  test('default state', () => {
    const decrementExpectedResult: CounterStateSchema = { value: -1 };
    const incrementExpectedResult: CounterStateSchema = { value: 1 };

    const decrementActualResult = counterReducer(undefined, counterActions.decrement());
    const incrementActualResult = counterReducer(undefined, counterActions.increment());

    expect(decrementActualResult).toEqual(decrementExpectedResult);
    expect(incrementActualResult).toEqual(incrementExpectedResult);
  });

  test('increment', () => {
    const expectedResult: CounterStateSchema = { value: 11 };
    const counterState: CounterStateSchema = { value: 10 };

    const actualResult = counterReducer(counterState, counterActions.increment());

    expect(actualResult).toEqual(expectedResult);
  });

  test('decrement', () => {
    const expectedResult: CounterStateSchema = { value: 9 };
    const counterState: CounterStateSchema = { value: 10 };

    const actualResult = counterReducer(counterState, counterActions.decrement());

    expect(actualResult).toEqual(expectedResult);
  });
});
