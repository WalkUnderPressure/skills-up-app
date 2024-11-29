import { memo } from 'react';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { Button, ButtonTheme } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import getCounterValue from '../model/selectors/getCounterValue';
import { counterActions } from '../model/slices/counterSlice';
import { CounterDataTestIdProps } from './Counter.test-ids';
import * as cls from './Counter.module.scss';

type CounterProps = {
  className?: string;
} & Partial<CounterDataTestIdProps>;

const Counter = memo((props: CounterProps) => {
  const { decrementDataTestId, valueDataTestId, incrementDataTestId } = props;

  const counterValue = useAppSelector(getCounterValue);
  const dispatch = useAppDispatch();

  const increaseCounter = () => {
    dispatch(counterActions.increment());
  };

  const decreaseCounter = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={classNames(cls.counter)}>
      <Button data-testid={decrementDataTestId} onClick={decreaseCounter} theme={ButtonTheme.CLEAR}>
        {'<'}
      </Button>
      <span data-testid={valueDataTestId}>{counterValue}</span>
      <Button data-testid={incrementDataTestId} onClick={increaseCounter} theme={ButtonTheme.CLEAR}>
        {'>'}
      </Button>
    </div>
  );
});

export default Counter;
