import { DefaultTheme, Interpolation, ThemedStyledProps, ThemeProps } from 'styled-components';
import { TypographyVariant } from '../themeValues';

export interface SubtitleProps {
  isSecondaryColor?: boolean;
}
export interface PaginationProps {
  isInactive?: boolean;
}

export type TypographyMixinsProps = SubtitleProps & PaginationProps;

export type TypographyMixins = Record<
  TypographyVariant,
  ReadonlyArray<
    Interpolation<
      | ThemeProps<DefaultTheme>
      | ThemedStyledProps<SubtitleProps, DefaultTheme>
      | ThemedStyledProps<PaginationProps, DefaultTheme>
    >
  >
>;
