import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import { ReduxStoreWithManager, StoreStateSchemaKeys } from 'app/providers/StoreProvider/schemas';

export type ReducersMap = {
  [name in StoreStateSchemaKeys]?: Reducer;
};

type ReducersMapEntry = [StoreStateSchemaKeys, Reducer];

type DynamicReducerWrapperProps = {
  reducers: ReducersMap;
} & PropsWithChildren;

function DynamicReducerProvider(props: DynamicReducerWrapperProps) {
  const { children, reducers = {} } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerName, reducer]: ReducersMapEntry) => {
      store.reducerManager.add(reducerName, reducer);
      dispatch({ type: `@ADD_DYNAMIC_REDUCER: ${reducerName}` });
    });

    return () => {
      Object.entries(reducers).forEach(([reducerName]: ReducersMapEntry) => {
        store.reducerManager.remove(reducerName);
        dispatch({ type: `@REMOVE_DYNAMIC_REDUCER: ${reducerName}` });
      });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}

export default DynamicReducerProvider;
