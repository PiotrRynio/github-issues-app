import styled from 'styled-components';

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 15px;
  }
`;

export const TitlesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px auto 13px;
`;
