import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import sessionReducer from 'modules/session/sessionSlice';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// debug
window.store = store.getState;
