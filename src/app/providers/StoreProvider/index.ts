import { StoreProviderProps } from './ui/StoreProvider';
import StoreProvider from './ui/StoreProvider';
import createReduxStore from './config/store';
import { StoreStateSchema } from './schemas';

// typed app hooks
import createAppAsyncThunk, { AsyncThunkRejectValue } from './hooks/createAppAsyncThunk';
import useAppDispatch from './hooks/useAppDispatch';
import useAppSelector from './hooks/useAppSelector';
import useAppStore from './hooks/useAppStore';

export {
  createReduxStore,
  StoreProvider,
  StoreStateSchema,
  StoreProviderProps,
  AsyncThunkRejectValue,
  createAppAsyncThunk,
  useAppDispatch,
  useAppSelector,
  useAppStore,
};
