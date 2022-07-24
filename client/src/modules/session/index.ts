import { createSlice } from '@reduxjs/toolkit';

import { loginAction } from './actions';

interface SessionState {
  email: string;
  token: string;
}

const initialState: SessionState = {
  email: '',
  token: '',
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      const { email, token } = action.payload.data;
      state.email = email;
      state.token = token;
    });
  },
});

export { loginAction };

export default sessionSlice.reducer;
