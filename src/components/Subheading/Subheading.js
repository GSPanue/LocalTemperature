import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.string.isRequired
};

const Subheading = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Subheading.propTypes = propTypes;

export default Subheading;
