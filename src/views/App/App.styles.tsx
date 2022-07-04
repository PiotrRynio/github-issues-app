import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainSection = styled.section`
  max-width: 950px;
  margin: 30px auto 70px;
  padding: 0 16px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 62px;
  }
`;
