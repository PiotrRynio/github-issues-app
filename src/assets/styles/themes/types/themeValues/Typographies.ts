import { FontSize, FontSizes, FontWeight, FontWeights, LineHeight, LineHeights } from '../../common';
import { Color, Colors } from './Colors';

type Typography = {
  fontSize: FontSizes[FontSize];
  lineHeight: LineHeights[LineHeight];
  fontWeight: FontWeights[FontWeight];
  fontFamily: FontSizes[FontSize];
  color: Colors[Color];
};

export type TypographyVariant = 'body1' | 'body2' | 'small' | 'itemTitle' | 'title' | 'subtitle' | 'pagination';

export type Typographies = Record<TypographyVariant, Typography>;
