import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile, ProfileStateSchema } from '../types/ProfileStateSchema';
import { fetchProfileData } from '../services/fetchProfileData';

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.isFailed = false;
        state.errorCode = null;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.isFailed = false;
        state.errorCode = null;
        state.data = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.isFailed = true;
        state.errorCode = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
