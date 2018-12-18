import { combineReducers } from 'redux';

import app from './app';
import screen from './screen';
import coordinates from './coordinates';
import location from './location';
import temperature from './temperature';

const reducer = combineReducers({
  app,
  screen,
  coordinates,
  location,
  temperature
});

export default reducer;
