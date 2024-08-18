import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { updateProfileData } from 'entities/Profile/model/services/updateProfileData';
import { Profile, ProfileStateSchema } from '../types/ProfileStateSchema';
import { fetchProfileData } from '../services/fetchProfileData';

const initialState: ProfileStateSchema = {
  data: null,
  form: null,
  isLoading: false,
  isReadonly: true,
  isFailed: false,
  errorCode: null,
  isSaving: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsReadonly: (state, action: PayloadAction<boolean>) => {
      state.isReadonly = action.payload;
    },
    updateProfileFormData: (state, action: PayloadAction<Partial<Profile>>) => {
      const newProfileData = action.payload;
      const userName = newProfileData?.username || state.form?.username || '';

      state.form = {
        ...state.form,
        ...newProfileData,
        username: userName,
      };
    },
    resetFormData: (state) => {
      state.form = state.data;
      state.isReadonly = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch profile data
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.isFailed = false;
        state.errorCode = null;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.isFailed = false;
        state.errorCode = null;

        const profile = action.payload;

        state.data = profile;
        state.form = profile;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.isFailed = true;
        state.errorCode = action.payload;
      })
      // update profile data
      .addCase(updateProfileData.pending, (state) => {
        state.isSaving = true;
        state.isFailed = false;
        state.errorCode = null;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isSaving = false;
        state.isFailed = false;
        state.errorCode = null;
        state.isReadonly = true;

        const profile = action.payload;

        state.data = profile;
        state.form = profile;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isSaving = false;
        state.isFailed = true;
        state.errorCode = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
