import styled, { css } from 'styled-components';

export const StyledAvatar = styled.img<{ isLarge: boolean }>`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.disabled};

  ${({ isLarge }) =>
    isLarge &&
    css`
      width: 296px;
      height: 296px;
    `}
`;
