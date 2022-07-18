import { createAsyncThunk } from '@reduxjs/toolkit';

import { startLoading } from 'modules/currentState';
import { loginRequest } from './requests';

export const loginAction = createAsyncThunk(
  'session/login',
  async (
    { email, password }: { email: string; password: string },
    thunkApi
  ) => {
    thunkApi.dispatch(startLoading());
    const response = await loginRequest(email, password);
    return response.data;
  }
);
