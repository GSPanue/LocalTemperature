import { combineReducers } from 'redux';

import app from './app';
import screen from './screen';
import coordinates from './coordinates';

const reducer = combineReducers({
  app,
  screen,
  coordinates
});

export default reducer;
