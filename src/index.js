import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { getWeather } from './actions';

import store from './store';
import App from './App';

export const mapStateToProps = ({ weather }) => {
  const { currentLocation, currentTemperature, error } = weather;

  return ({
    complete: !!(currentLocation && currentTemperature),
    error
  });
};

export const mapDispatchToProps = (dispatch) => ({
  getWeather: () => dispatch(getWeather())
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);
