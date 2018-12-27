import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Heading from '../Heading';

const propTypes = {
  currentTemperature: PropTypes.string.isRequired,
  currentScale: PropTypes.string.isRequired,
  changeScale: PropTypes.func.isRequired
};

class Temperature extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * handleClick: Handles a click event.
   */
  handleClick() {
    const { currentScale, changeScale } = this.props;
    const isCelsius = (currentScale === 'celsius');
    const nextScale = (isCelsius) ? 'fahrenheit' : 'celsius';

    // Change current temperature scale
    changeScale(nextScale);
  }

  render() {
    const { currentTemperature } = this.props;

    return (
      <Button onClick={this.handleClick}>
        <Heading>
          {currentTemperature}
        </Heading>
      </Button>
    );
  }
}

Temperature.propTypes = propTypes;

export default Temperature;
