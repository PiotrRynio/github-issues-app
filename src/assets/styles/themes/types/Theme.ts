import { Mixins } from './mixinsValues';
import {
  Breakpoints,
  Colors,
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  Sizes,
  Typographies,
} from './themeValues';

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
