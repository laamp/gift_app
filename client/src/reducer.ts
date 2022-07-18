import { combineReducers } from '@reduxjs/toolkit';

import currentStateReducer from 'modules/currentState';
import sessionReducer from 'modules/session';

const rootReducer = combineReducers({
  currentState: currentStateReducer,
  session: sessionReducer,
});

export default rootReducer;
