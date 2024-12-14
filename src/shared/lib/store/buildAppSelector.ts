/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';

import { StoreStateSchema } from '~/app/providers/StoreProvider';

type Selector<T, Args extends any[]> = (state: StoreStateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

function buildAppSelector<T, Args extends any[]>(selector: Selector<T, Args>): Result<T, Args> {
  const useSelectorHook: Hook<T, Args> = (...args: Args) => {
    return useSelector((state: StoreStateSchema) => selector(state, ...args));
  };

  return [useSelectorHook, selector];
}

export default buildAppSelector;
