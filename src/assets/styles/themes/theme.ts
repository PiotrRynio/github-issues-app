import { Mixins, mixins } from './mixins';
import { Breakpoints, breakpoints } from './themeValues';
import { Colors, colors } from './themeValues';
import { fontFamilies, FontFamilies } from './themeValues';
import { fontSize, FontSize } from './themeValues';
import { fontWeight, FontWeight } from './themeValues';

export type Theme = {
  breakpoints: Breakpoints;
  colors: Colors;
  fontFamilies: FontFamilies;
  fontSize: FontSize;
  fontWeight: FontWeight;
  mixins: Mixins;
};

export const theme: Theme = {
  breakpoints,
  colors,
  fontFamilies,
  fontSize,
  fontWeight,
  mixins,
};
