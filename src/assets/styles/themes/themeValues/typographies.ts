import { FontSize, fontSizes, FontSizes } from './fontSizes';
import { LineHeight, lineHeights, LineHeights } from './lineHeight';
import { FontWeight, fontWeights, FontWeights } from './fontWeights';
import { Color, colors, Colors } from './colors';
import { fontFamilies } from './fontFamilies';

type Typography = {
  fontSize: FontSizes[FontSize];
  lineHeight: LineHeights[LineHeight];
  fontWeight: FontWeights[FontWeight];
  fontFamily: FontSizes[FontSize];
  color: Colors[Color];
};

export type TypographyVariant = 'body1' | 'body2' | 'small' | 'itemTitle' | 'title' | 'subtitle' | 'pagination';

export type Typographies = Record<TypographyVariant, Typography>;

export const typographies: Typographies = {
  body1: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.normal,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },

  body2: {
    fontSize: fontSizes.sm,
    lineHeight: fontSizes.md,
    fontWeight: fontWeights.normal,
    fontFamily: fontFamilies.primary,
    color: colors.secondaryText,
  },

  small: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.normal,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },

  itemTitle: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.normal,
    fontFamily: fontFamilies.primary,
    color: colors.linkText,
  },

  title: {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontWeight: fontWeights.normal,
    fontFamily: fontFamilies.primary,
    color: colors.secondaryText,
  },

  subtitle: {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.normal,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },

  pagination: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.normal,
    fontFamily: fontFamilies.primary,
    color: colors.linkText,
  },
};
