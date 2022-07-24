import { createSlice } from '@reduxjs/toolkit';

import { loginAction } from 'modules/session';

interface Ui {
  loading: boolean;
  errors: Array<string>;
}

const initialState: Ui = {
  loading: false,
  errors: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.loading = false;
        state.errors = [];
      })
      .addCase(loginAction.rejected, (state) => {
        state.loading = false;
        state.errors.push('Login failed');
      });
  },
});

export default uiSlice.reducer;
