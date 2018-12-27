import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${({ theme }) => (theme.heading.primaryColor)};
  font-size: ${({ theme }) => (theme.text.extraLarge)};
  font-weight: bold;
`;

export {
  Wrapper
};
