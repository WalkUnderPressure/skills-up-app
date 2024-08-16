import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import createReduxStore from '../config/store';
import { StoreReducersMapObject, StoreStateSchema } from '../schemas';

export type StoreProviderProps = {
  initialState?: DeepPartial<StoreStateSchema>;
  initialReducers?: DeepPartial<StoreReducersMapObject>;
} & PropsWithChildren;

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, initialReducers } = props;

  const navigate = useNavigate();

  const store = createReduxStore({
    initialState: initialState as StoreStateSchema,
    initialReducers: initialReducers as StoreReducersMapObject,
    navigate,
  });

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default StoreProvider;
