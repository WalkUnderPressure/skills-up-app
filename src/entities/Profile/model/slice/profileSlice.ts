import { createSlice } from '@reduxjs/toolkit';

import { ProfileStateSchema } from '../types/ProfileStateSchema';

const initialState: ProfileStateSchema = {
  data: null,
  isLoading: false,
  isFailed: false,
  isReadonly: true,
  errorCode: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  // TODO: Add reducers
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
