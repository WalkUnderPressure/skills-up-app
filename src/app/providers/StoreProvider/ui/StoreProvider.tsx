import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { StoreReducersMapObject, StoreStateSchema } from '../schemas';
import createReduxStore from '../config/store';

export type StoreProviderProps = {
  initialState?: DeepPartial<StoreStateSchema>;
  initialReducers?: DeepPartial<StoreReducersMapObject>;
} & PropsWithChildren;

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, initialReducers } = props;

  const store = createReduxStore({
    initialState: initialState as StoreStateSchema,
    initialReducers: initialReducers as StoreReducersMapObject,
  });

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default StoreProvider;
