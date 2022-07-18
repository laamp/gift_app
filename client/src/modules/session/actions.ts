import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginRequest } from './requests';

export const loginAction = createAsyncThunk(
  'session/login',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await loginRequest(email, password);
    return response.data;
  }
);
