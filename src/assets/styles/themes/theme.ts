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
  LineHeights,
  lineHeights,
  sizes,
  Sizes,
  Typographies,
  typographies,
} from './themeValues';
import { Mixins, mixins } from './mixins';

export interface Theme {
  breakpoints: Breakpoints;
  colors: Colors;
  fontFamilies: FontFamilies;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  mixins: Mixins;
  sizes: Sizes;
  typographies: Typographies;
}

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
