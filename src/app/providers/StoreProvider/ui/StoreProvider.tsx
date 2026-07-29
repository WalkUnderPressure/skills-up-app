import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { StoreReducersMapObject, StoreStateSchema } from '../schemas';
import createReduxStore from '../config/store';

export type StoreProviderProps = {
  initialState?: StoreStateSchema;
  initialReducers?: StoreReducersMapObject;
} & PropsWithChildren;

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, initialReducers } = props;

  const store = createReduxStore({
    initialState,
    initialReducers,
  });

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default StoreProvider;
