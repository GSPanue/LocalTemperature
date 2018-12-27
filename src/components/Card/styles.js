import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 80px;
  border-radius: 6px;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.08);
  background: ${({ theme }) => (theme.card.primaryBackground)};
  user-select: none;
`;

export {
  Wrapper
};
