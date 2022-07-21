import { combineReducers } from '@reduxjs/toolkit';

import uiReducer from 'modules/ui';
import sessionReducer from 'modules/session';

const rootReducer = combineReducers({
  ui: uiReducer,
  session: sessionReducer,
});

export default rootReducer;
