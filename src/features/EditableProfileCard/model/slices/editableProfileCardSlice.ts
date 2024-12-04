import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile } from '~/entities/Profile';
import { EditableProfileStateSchema } from '../types/EditableProfileCardStateSchema';
import { validateProfileData } from '../services/validateProfileData';
import { updateProfileData } from '../services/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData';

const initialState: EditableProfileStateSchema = {
  data: null,
  form: null,
  isLoading: false,
  isReadonly: true,
  isFailed: false,
  errorCode: null,
  isSaving: false,
  validationErrors: {},
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

      const newFormData = {
        ...state.form,
        ...newProfileData,
      };

      const validationErrors = validateProfileData(newFormData);

      state.validationErrors = validationErrors;
      state.form = newFormData;
    },
    resetFormData: (state) => {
      state.form = state.data;
      state.isReadonly = true;
      state.validationErrors = {};
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

        const errorCode = action.payload?.error ?? null;

        if (errorCode) {
          state.isFailed = true;
          state.errorCode = errorCode;
        } else {
          state.validationErrors = action.payload?.validation;
        }
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
