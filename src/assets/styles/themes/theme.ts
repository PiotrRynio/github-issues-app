import { mixins, Mixins } from './mixins';
import {
  breakpoints,
  Breakpoints,
  colors,
  Colors,
  fontFamilies,
  FontFamilies,
  fontSizes,
  FontSizes,
  fontWeights,
  FontWeights,
  sizes,
  Sizes,
} from './themeValues';

export type Theme = {
  breakpoints: Breakpoints;
  colors: Colors;
  fontFamilies: FontFamilies;
  fontSize: FontSizes;
  fontWeight: FontWeights;
  mixins: Mixins;
  sizes: Sizes;
};

export const theme: Theme = {
  breakpoints,
  colors,
  fontFamilies,
  fontSize: fontSizes,
  fontWeight: fontWeights,
  mixins,
  sizes,
};
