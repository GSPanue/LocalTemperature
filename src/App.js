import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { light } from './theme';

const App = () => (
  <Fragment>
    <ThemeProvider theme={light}>
      <div>Hello world!</div>
    </ThemeProvider>
  </Fragment>
);

export default App;
