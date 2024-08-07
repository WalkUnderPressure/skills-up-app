import { createSlice } from '@reduxjs/toolkit';

import { UserStateSchema } from '../types/UserStateSchema';

const initialState: UserStateSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
