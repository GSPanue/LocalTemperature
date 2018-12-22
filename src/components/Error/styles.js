import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 60px;
  font-size: ${({ theme }) => (theme.text.large)};
  font-weight: ${({ theme }) => (theme.text.bold)};
`;

export {
  Wrapper
};
