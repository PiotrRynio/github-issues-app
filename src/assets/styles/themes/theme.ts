import { mixins, Mixins } from './mixins';
import {
  breakpoints,
  Breakpoints,
  colors,
  Colors,
  fontFamilies,
  FontFamilies,
  fontSize,
  FontSize,
  fontWeight,
  FontWeight,
  sizes,
  Sizes,
} from './themeValues';

export type Theme = {
  breakpoints: Breakpoints;
  colors: Colors;
  fontFamilies: FontFamilies;
  fontSize: FontSize;
  fontWeight: FontWeight;
  mixins: Mixins;
  sizes: Sizes;
};

export const theme: Theme = {
  breakpoints,
  colors,
  fontFamilies,
  fontSize,
  fontWeight,
  mixins,
  sizes,
};
