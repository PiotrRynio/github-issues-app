import { css, DefaultTheme, Interpolation, ThemeProps } from 'styled-components';

export type Typography = {
  body1: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
  body2: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
  small: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
  itemTitle: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
  title: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
  subtitle: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
  pagination: ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>;
};

export const typography: Typography = {
  body1: css`
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
  `,
  body2: css`
    color: ${({ theme }) => theme.colors.secondaryText};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
  `,
  small: css`
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
  `,
  itemTitle: css`
    color: ${({ theme }) => theme.colors.linkText};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
  `,
  title: css`
    color: ${({ theme }) => theme.colors.secondaryText};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
  `,
  subtitle: css`
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
  `,
  pagination: css`
    color: ${({ theme }) => theme.colors.linkText};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
  `,
};
