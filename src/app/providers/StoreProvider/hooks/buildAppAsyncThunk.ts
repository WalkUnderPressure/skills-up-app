import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
  bindActionCreators,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';

import { StoreStateSchema, ThunkExtra } from '~/app/providers/StoreProvider/schemas';
import { AppDispatch } from '~/app/providers/StoreProvider/config/store';

type AsyncThunkConfig<T> = {
  state: StoreStateSchema;
  dispatch: AppDispatch;
  extra: ThunkExtra;
  rejectValue: T;
};

type DefaultMeta<ThunkArg> = {
  arg: ThunkArg;
  requestId: string;
  requestStatus: 'pending' | 'rejected' | 'fulfilled';
};

function buildAppAsyncThunk<Returned, ThunkArg, Rejected>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, AsyncThunkConfig<Rejected>>,
  options?: AsyncThunkOptions<ThunkArg, AsyncThunkConfig<Rejected>>,
) {
  const asyncThunk = createAsyncThunk<Returned, ThunkArg, AsyncThunkConfig<Rejected>>(
    typePrefix,
    payloadCreator,
    options,
  );

  const useAsyncThunk = (): ((
    args: ThunkArg,
  ) => Promise<PayloadAction<Returned, string, DefaultMeta<ThunkArg>, Rejected>>) => {
    // Use useDispatch instead useAppDispatch to prevent circular-dependency
    const dispatch = useDispatch();

    // @ts-expect-error bindActionCreators return wrapped asyncThunk and we don't need use it with dispatch anymore
    return useMemo(() => bindActionCreators(asyncThunk, dispatch), [dispatch]);
  };

  return [asyncThunk, useAsyncThunk] as const;
}

export default buildAppAsyncThunk;
