import React from 'react';
import PropTypes from 'prop-types';

import Subheading from '../Subheading';

const propTypes = {
  currentLocation: PropTypes.string.isRequired
};

const Location = ({ currentLocation }) => (
  <Subheading>
    {currentLocation}
  </Subheading>
);

Location.propTypes = propTypes;

export default Location;
