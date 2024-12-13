import { PayloadAction } from '@reduxjs/toolkit';

import safeJsonParse from '~/shared/lib/helpers/safeJsonParse';
import { LS_AUTH_USER } from '~/shared/constants/localStorage';
import { UserStateSchema, User } from '../types/UserStateSchema';
import { buildAppSlice } from '~/shared/lib/store';

const initialState: UserStateSchema = {
  authData: null,
  isInitialized: false,
};

export const userSlice = buildAppSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>) {
      const userData = action.payload;

      state.authData = userData;
      localStorage.setItem(LS_AUTH_USER, JSON.stringify(userData));
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

export const { actions: userActions, reducer: userReducer, useActions: useUserActions } = userSlice;
