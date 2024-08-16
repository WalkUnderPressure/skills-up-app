import { createAsyncThunk } from '@reduxjs/toolkit';

import type { StoreStateSchema, ThunkExtra } from '../schemas';
import type { AppDispatch } from '../config/store';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: StoreStateSchema;
  dispatch: AppDispatch;
  extra: ThunkExtra;
}>();

export type AsyncThunkRejectValue<RV> = {
  rejectValue: RV;
};

export default createAppAsyncThunk;
