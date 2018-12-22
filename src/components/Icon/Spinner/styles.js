import styled, { keyframes } from 'styled-components';

import IconBase from '../../IconBase';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const StyledIconBase = styled(IconBase)`
  animation: ${rotate} 2s linear infinite;
`;

const StyledCircle = styled.circle`
  stroke: ${({ strokeColor, theme }) => (strokeColor || theme.spinner.primaryColor)};
  stroke-linecap: round;
  stroke-width: ${({ thickness, theme }) => (thickness || theme.spinner.thickness)};
  animation: ${dash} 1.5s ease-in-out infinite;
`;

export {
  StyledIconBase,
  StyledCircle
};
