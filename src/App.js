import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { light } from './theme';
import Splash from './screens/Splash';

const propTypes = {
  currentScreen: PropTypes.string.isRequired,
  changeScreen: PropTypes.func.isRequired
};

const App = ({ currentScreen, ...rest }) => {
  const shouldShowSplashScreen = (currentScreen === 'splash');

  return (
    <ThemeProvider theme={light}>
      {(shouldShowSplashScreen) ? <Splash {...rest} /> : <div>Home</div>}
    </ThemeProvider>
  );
};

App.propTypes = propTypes;

export default App;
