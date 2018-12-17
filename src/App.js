import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { light } from './theme';

import Splash from './screens/Splash';

const App = () => (
  <Fragment>
    <ThemeProvider theme={light}>
      <Splash />
    </ThemeProvider>
  </Fragment>
);

export default App;
