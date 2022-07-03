export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type FontSizes = Record<FontSize, string>;

export const fontSizes: FontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '26px',
};
