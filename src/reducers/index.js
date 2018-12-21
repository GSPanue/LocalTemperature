import { combineReducers } from 'redux';

import app from './app';
import screen from './screen';
import weather from './weather';

const reducer = combineReducers({
  app,
  screen,
  weather
});

export default reducer;
