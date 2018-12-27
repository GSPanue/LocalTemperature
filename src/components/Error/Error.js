import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  error: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

const Error = ({ error, children }) => (
  (error) ? <Wrapper>{error}</Wrapper> : children
);

Error.propTypes = propTypes;

export default Error;
