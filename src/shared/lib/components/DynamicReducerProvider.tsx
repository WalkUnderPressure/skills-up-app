import { PropsWithChildren, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

import { StoreStateSchema, StoreStateSchemaKeys } from 'app/providers/StoreProvider/schemas';
import { useAppDispatch, useAppStore } from 'app/providers/StoreProvider';

export type ReducersMap = {
  [name in StoreStateSchemaKeys]?: Reducer<NonNullable<StoreStateSchema[name]>>;
};

type ReducersMapEntry = [StoreStateSchemaKeys, Reducer];

type DynamicReducerWrapperProps = {
  reducers: ReducersMap;
  removeAfterUnmount?: boolean;
} & PropsWithChildren;

function DynamicReducerProvider(props: DynamicReducerWrapperProps) {
  const { children, reducers = {}, removeAfterUnmount = true } = props;

  const dispatch = useAppDispatch();
  const store = useAppStore();

  useEffect(() => {
    Object.entries(reducers).forEach((entry) => {
      const [reducerName, reducer] = entry as ReducersMapEntry;

      const isReducerAdded = store.reducerManager.add(reducerName, reducer);

      if (isReducerAdded) {
        dispatch({ type: `@ADD_DYNAMIC_REDUCER: ${reducerName}` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach((entry) => {
          const [reducerName] = entry as ReducersMapEntry;

          store.reducerManager.remove(reducerName);
          dispatch({ type: `@REMOVE_DYNAMIC_REDUCER: ${reducerName}` });
        });
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}

export default DynamicReducerProvider;
