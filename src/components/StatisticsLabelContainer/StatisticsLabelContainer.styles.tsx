import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isLongerGap?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0 14px;
  ${({ isLongerGap }) =>
    isLongerGap &&
    css`
      gap: 0 19px;
    `}
`;
