import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { light } from './theme';
import { Wrapper } from './styles';

import Loader from './components/Loader';
import Main from './screens/Main';

const propTypes = {
  complete: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  getWeather: PropTypes.func.isRequired
};

class App extends Component {
  componentDidMount() {
    const { getWeather } = this.props;

    getWeather();
  }

  render() {
    const { getWeather, ...rest } = this.props;

    return (
      <ThemeProvider theme={light}>
        <Wrapper>
          <Loader {...rest}>
            <Main />
          </Loader>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

App.propTypes = propTypes;

export default App;
