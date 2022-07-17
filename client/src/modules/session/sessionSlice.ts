import { createSlice } from '@reduxjs/toolkit';

export interface SessionState {
  email: string;
  token: string;
  testValue: number;
}

const initialState: SessionState = {
  email: 'lance',
  token: 'test token',
  testValue: 10,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    increment: (state) => {
      state.testValue += 1;
    },
  },
});

export const { increment } = sessionSlice.actions;

export default sessionSlice.reducer;
