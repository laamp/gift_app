import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'store';

export interface SessionState {
  email: string;
  token: string;
}

const initialState: SessionState = {
  email: 'lance',
  token: 'test token',
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
});

export default sessionSlice.reducer;
