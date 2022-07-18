import { createSlice } from '@reduxjs/toolkit';

interface CurrentState {
  loading: boolean;
}

const initialState: CurrentState = {
  loading: false,
};

const currentStateSlice = createSlice({
  name: 'currentState',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoading, endLoading } = currentStateSlice.actions;

export default currentStateSlice.reducer;
