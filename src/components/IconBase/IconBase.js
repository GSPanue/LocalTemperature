import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

const IconBase = ({ children, ...rest }) => (
  <svg {...rest}>
    {children}
  </svg>
);

IconBase.propTypes = propTypes;

export default IconBase;
