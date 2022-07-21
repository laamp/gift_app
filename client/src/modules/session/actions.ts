import { createAsyncThunk } from '@reduxjs/toolkit';

import { startLoading, endLoading } from 'modules/ui';
import { loginRequest } from './requests';

export const loginAction = createAsyncThunk(
  'session/login',
  async (
    { email, password }: { email: string; password: string },
    thunkApi
  ) => {
    thunkApi.dispatch(startLoading());

    const response = await loginRequest(email, password)
      .then((success) => {
        console.log('first thing happened. success', success);
        return success.data;
      })
      .catch((error) => {
        console.log('second thing happened. error', error);
        return error;
      });

    thunkApi.dispatch(endLoading());

    return response;
  }
);
