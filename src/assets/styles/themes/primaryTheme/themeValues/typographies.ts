import { colors, fontFamilies, fontSizes, fontWeights } from '.';
import { Typographies } from '../../types';
import { lineHeights } from './lineHeight';

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
    lineHeight: lineHeights.md,
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
    fontSize: fontSizes.md,
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
