export type Color =
  | 'primary'
  | 'primaryText'
  | 'secondaryText'
  | 'linkText'
  | 'separatorLine'
  | 'searcher'
  | 'disabled'
  | 'background'
  | 'transparent'
  | 'border';

export type Colors = Record<Color, string>;
