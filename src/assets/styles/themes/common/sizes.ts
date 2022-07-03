export type Size = 'default' | 'md';

export type Sizes = { topBarHeight: Record<Size, string> };

export const sizes: Sizes = {
  topBarHeight: { default: '58px', md: '72px' },
};
