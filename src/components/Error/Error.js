import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  error: PropTypes.string.isRequired
};

const Error = ({ error }) => (
  <Wrapper>
    {error}
  </Wrapper>
);

Error.propTypes = propTypes;

export default Error;
