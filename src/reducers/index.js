import { combineReducers } from 'redux';

import app from './app';
import screen from './screen';
import location from './location';
import temperature from './temperature';

const reducer = combineReducers({
  app,
  screen,
  location,
  temperature
});

export default reducer;
