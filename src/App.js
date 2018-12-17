import React, { Fragment } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';
import { light } from './theme';

import Splash from './screens/Splash';

const App = () => (
  <Fragment>
    <ReduxProvider store={store}>
      <ThemeProvider theme={light}>
        <Splash />
      </ThemeProvider>
    </ReduxProvider>
  </Fragment>
);

export default App;
