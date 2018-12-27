import { combineReducers } from 'redux';

import app from './app';
import weather from './weather';
import scale from './scale';

const reducer = combineReducers({
  app,
  weather,
  scale
});

export default reducer;
