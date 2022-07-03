import styled from 'styled-components';

export const StyledInput = styled.input`
  ${({ theme }) => theme.mixins.typography.body1}
  height: 37px;
  width: 242px;
  padding: 6px 17px 7px;
  border: 1px solid ${({ theme }) => theme.colors.searcher};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
`;
