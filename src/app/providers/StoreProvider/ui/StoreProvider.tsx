import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import createReduxStore from '../config/store';
import { StoreReducersMapObject, StoreStateSchema } from '../schemas';

export type StoreProviderProps = {
  initialState?: DeepPartial<StoreStateSchema>;
  initialReducers?: DeepPartial<StoreReducersMapObject>;
} & PropsWithChildren;

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, initialReducers } = props;

  const store = createReduxStore(
    initialState as StoreStateSchema,
    initialReducers as StoreReducersMapObject,
  );

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default StoreProvider;
