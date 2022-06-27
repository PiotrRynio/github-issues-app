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

export interface Theme {
  breakpoints: Breakpoints;
  colors: Colors;
  fontFamilies: FontFamilies;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  mixins: Mixins;
  sizes: Sizes;
}

export const theme: Theme = {
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  mixins,
  sizes,
};
