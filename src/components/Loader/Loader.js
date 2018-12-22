import React from 'react';
import PropTypes from 'prop-types';

import Error from '../Error';
import Spinner from '../Icon/Spinner';

const propTypes = {
  complete: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

const Loader = ({ complete, children, ...rest }) => (
  <Error {...rest}>
    {(complete) ? children : <Spinner />}
  </Error>
);

Loader.propTypes = propTypes;

export default Loader;
