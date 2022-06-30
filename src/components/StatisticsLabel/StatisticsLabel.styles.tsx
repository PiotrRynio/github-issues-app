import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${({ theme }) => theme.colors.primaryText};
`;
