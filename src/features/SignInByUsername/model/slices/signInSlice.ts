import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { signInByUsername } from '../services/signInByUsername';
import { SignInSchema } from '../types/SignInSchema';

const initialState: SignInSchema = {
  username: '',
  password: '',
  isLoading: false,
  isFailed: false,
  errorCode: null,
};

export const signInSlice = createSlice({
  name: 'sign-in',
  initialState,
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInByUsername.pending, (state) => {
        state.isLoading = true;
        state.isFailed = false;
        state.errorCode = null;
      })
      .addCase(signInByUsername.fulfilled, (state) => {
        state.isLoading = false;
        state.isFailed = false;
        state.errorCode = null;
      })
      .addCase(signInByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.isFailed = true;
        state.errorCode = action.payload;
      });
  },
});

export const { actions: signInActions } = signInSlice;
export const { reducer: signInReducer } = signInSlice;
