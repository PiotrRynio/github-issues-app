export type Breakpoint = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Breakpoints = Record<Breakpoint, string>;

export const breakpoints: Breakpoints = {
  xxs: '370px',
  xs: '480px',
  sm: '560px',
  md: '768px',
  lg: '1024px',
  xl: '1260px',
  xxl: '1900px',
};
