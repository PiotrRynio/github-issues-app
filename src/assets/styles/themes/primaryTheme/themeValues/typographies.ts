import { fontSizes, fontWeights, lineHeights } from '../../common';
import { fontFamilies } from './fontFamilies';
import { Typographies } from '../../types';
import { colors } from './colors';

export const typographies: Typographies = {
  body1: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },

  body2: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.primary,
    color: colors.secondaryText,
  },

  small: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },

  itemTitle: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.primary,
    color: colors.linkText,
  },

  title: {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.primary,
    color: colors.secondaryText,
  },

  subtitle: {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },

  pagination: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.primary,
    color: colors.linkText,
  },
};
