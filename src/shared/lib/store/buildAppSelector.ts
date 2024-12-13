import { useSelector } from 'react-redux';

import { StoreStateSchema } from '~/app/providers/StoreProvider';

type Selector<T> = (state: StoreStateSchema) => T;
type Result<T> = [() => T, Selector<T>];

const buildAppSelector = <T>(selector: Selector<T>): Result<T> => {
  const useSelectorHook = () => {
    return useSelector(selector);
  };

  return [useSelectorHook, selector];
};

export default buildAppSelector;
