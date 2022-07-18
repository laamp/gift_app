import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// thunks
export const loginUser = createAsyncThunk(
  'session/login',
  async (userData: { email: string; password: string }) => {
    const response = await axios.post('/api/auth/login', { login: userData });
    return response.data;
  }
);

// reducer logic
export interface SessionState {
  email: string;
  token: string;
  loading: boolean;
}

const initialState: SessionState = {
  email: '',
  token: '',
  loading: false,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload.data.email;
        state.token = action.payload.data.token;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = sessionSlice.actions;

export default sessionSlice.reducer;
