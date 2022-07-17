import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from 'modules/session/sessionSlice';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});

// debug
window.store = store.getState;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
