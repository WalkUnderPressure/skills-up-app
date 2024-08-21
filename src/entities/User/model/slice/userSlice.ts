import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import safeJsonParse from 'shared/lib/helpers/safeJsonParse';
import { LS_AUTH_USER } from 'shared/constants/localStorage';
import { UserStateSchema, User } from '../types/UserStateSchema';

const initialState: UserStateSchema = {
  authData: null,
  isInitialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>) {
      state.authData = action.payload;
    },
    signOut(state) {
      state.authData = null;
      localStorage.removeItem(LS_AUTH_USER);
    },
    initAuthData(state) {
      const initUserData = safeJsonParse(localStorage.getItem(LS_AUTH_USER));

      if (initUserData) {
        state.authData = initUserData;
      }

      state.isInitialized = true;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
