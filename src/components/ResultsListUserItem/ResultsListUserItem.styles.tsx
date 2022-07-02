import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 20px 0 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 28px;
  gap: 20px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
