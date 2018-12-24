import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired
};

const Button = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
);

Button.propTypes = propTypes;

export default Button;
