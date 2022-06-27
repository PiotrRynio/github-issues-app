import styled from 'styled-components';

export const Body1Typography = styled.p`
  ${({ theme }) => theme.mixins.typography.body1};
`;
export const Body2Typography = styled.p`
  ${({ theme }) => theme.mixins.typography.body2};
`;
export const SmallTypography = styled.p`
  ${({ theme }) => theme.mixins.typography.small};
`;
export const ItemTitleTypography = styled.h3`
  ${({ theme }) => theme.mixins.typography.itemTitle};
`;
export const TitleTypography = styled.h2`
  ${({ theme }) => theme.mixins.typography.title};
`;
export const SubtitleTypography = styled.h4`
  ${({ theme }) => theme.mixins.typography.subtitle};
`;
export const PaginationTypography = styled.span`
  ${({ theme }) => theme.mixins.typography.pagination};
`;
