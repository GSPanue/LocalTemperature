import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import store from './store';
import App from './App';

const mapStateToProps = (state) => ({
  currentScreen: state.screen.currentScreen
});

const ConnectedApp = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);
