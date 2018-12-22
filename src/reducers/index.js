import { combineReducers } from 'redux';

import app from './app';
import weather from './weather';

const reducer = combineReducers({
  app,
  weather
});

export default reducer;
