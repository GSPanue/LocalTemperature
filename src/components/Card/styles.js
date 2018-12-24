import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: 0 3px 6px 0 rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.08);
  background: ${({ theme }) => (theme.card.primaryBackground)};
`;

export {
  Wrapper
};
