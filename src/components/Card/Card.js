import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

const Card = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Card.propTypes = propTypes;

export default Card;
