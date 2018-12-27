import React from 'react';

import { StyledCard } from './styles';
import Temperature from '../../components/Temperature';
import Location from '../../components/Location';

const Main = () => (
  <StyledCard>
    <Temperature />
    <Location />
  </StyledCard>
);

export default Main;
