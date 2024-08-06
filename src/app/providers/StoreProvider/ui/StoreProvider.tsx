import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import createReduxStore from '../config/store';
import StoreStateSchema from '../schemas';

export type StoreProviderProps = {
  initialState?: DeepPartial<StoreStateSchema>;
} & PropsWithChildren;

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StoreStateSchema);

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default StoreProvider;
