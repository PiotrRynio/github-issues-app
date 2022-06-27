import { css, DefaultTheme, Interpolation, ThemedStyledProps, ThemeProps } from 'styled-components';

interface SubtitleProps {
  isSecondaryColor?: boolean;
}
interface PaginationProps {
  isInactive?: boolean;
}

export type Typography = {
  body1: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
  body2: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
  small: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
  itemTitle: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
  title: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
  subtitle: ReadonlyArray<Interpolation<ThemedStyledProps<SubtitleProps, DefaultTheme>>>;
  pagination: ReadonlyArray<Interpolation<ThemedStyledProps<PaginationProps, DefaultTheme>>>;
};

export const typography: Typography = {
  body1: css`
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 24px;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme }) => theme.colors.primaryText};
  `,
  body2: css`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 18px;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme }) => theme.colors.secondaryText};
  `,
  small: css`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 16px;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme }) => theme.colors.primaryText};
  `,
  itemTitle: css`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 24px;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme }) => theme.colors.linkText};
    cursor: pointer;
  `,
  title: css`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 32px;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme }) => theme.colors.secondaryText};
  `,
  subtitle: css<SubtitleProps>`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 32px;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme, isSecondaryColor }) =>
      isSecondaryColor ? theme.colors.secondaryText : theme.colors.primaryText};
  `,
  pagination: css<PaginationProps>`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 18px;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme, isInactive }) => (isInactive ? theme.colors.disabled : theme.colors.linkText)};
    cursor: ${({ isInactive }) => (isInactive ? 'auto' : 'pointer')};
  `,
};
