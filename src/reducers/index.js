import { combineReducers } from 'redux';

import app from './app';
import screen from './screen';
import temperature from './temperature';

const reducer = combineReducers({
  app,
  screen,
  temperature
});

export default reducer;
