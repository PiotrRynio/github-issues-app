import { mixins } from './mixinsValues/mixins';
import { Theme } from '../types';
import { breakpoints, fontSizes, fontWeights, lineHeights, sizes } from '../common';
import { colors, fontFamilies, typographies } from './themeValues';

export const theme: Theme = {
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  mixins,
  sizes,
  typographies,
};
