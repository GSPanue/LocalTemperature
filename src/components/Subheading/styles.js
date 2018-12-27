import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${({ theme }) => (theme.subheading.primaryColor)};
  font-size: ${({ theme }) => (theme.text.large)};
`;

export {
  Wrapper
};
