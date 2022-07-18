import { createSlice } from '@reduxjs/toolkit';

import { loginAction } from './actions';

interface SessionState {
  email: string;
  token: string;
  loading: boolean;
}

const initialState: SessionState = {
  email: '',
  token: '',
  loading: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload.data.email;
        state.token = action.payload.data.token;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loading = false;
      });
  },
});

export { loginAction };

export default sessionSlice.reducer;
