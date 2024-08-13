import { useDispatch, useSelector } from 'react-redux';

import getCounterValue from '../model/selectors/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import { Button, ButtonTheme } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import * as cls from './Counter.module.scss';

const Counter = () => {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const increaseCounter = () => {
    dispatch(counterActions.increment());
  };

  const decreaseCounter = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={classNames(cls.counter)}>
      <Button
        data-testid={Counter.DecrementDataTestId}
        onClick={decreaseCounter}
        theme={ButtonTheme.CLEAR}
      >
        {'<'}
      </Button>
      <span data-testid={Counter.ValueDataTestId}>{counterValue}</span>
      <Button
        data-testid={Counter.IncrementDataTestId}
        onClick={increaseCounter}
        theme={ButtonTheme.CLEAR}
      >
        {'>'}
      </Button>
    </div>
  );
};

Counter.ValueDataTestId = 'ValueDataTestId';
Counter.IncrementDataTestId = 'IncrementDataTestId';
Counter.DecrementDataTestId = 'DecrementDataTestId';

export default Counter;
