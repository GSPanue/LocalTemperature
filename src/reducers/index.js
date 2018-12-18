import { combineReducers } from 'redux';

import app from './app';
import screen from './screen';

const reducer = combineReducers({
  app,
  screen
});

export default reducer;
