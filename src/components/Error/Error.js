import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.element.isRequired
};

const Error = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Error.propTypes = propTypes;

export default Error;
