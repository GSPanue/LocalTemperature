import React from 'react';
import PropTypes from 'prop-types';

import { StyledIconBase, StyledCircle } from './styles';

const propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.string,
  size: PropTypes.string
};

const defaultProps = {
  color: undefined,
  thickness: undefined,
  size: '40'
};

const Spinner = ({ color, thickness, size, ...rest }) => (
  <StyledIconBase
    viewBox="0 0 50 50"
    width={size}
    height={size}
    {...rest}
  >
    <StyledCircle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeColor={color}
      thickness={thickness}
    />
  </StyledIconBase>
);

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
