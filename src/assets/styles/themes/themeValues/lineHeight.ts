export type LineHeight = 'sm' | 'md' | 'lg' | 'xl';

export type LineHeights = Record<LineHeight, string>;

export const lineHeights: LineHeights = {
  sm: '16px',
  md: '18px',
  lg: '24px',
  xl: '32px',
};
