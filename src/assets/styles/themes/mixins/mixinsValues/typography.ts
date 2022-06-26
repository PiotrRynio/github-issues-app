import { css, Interpolation, ThemeProps } from 'styled-components';
import { colors } from '../../themeValues';
import { fontFamilies } from '../../themeValues';

export type Typography = {
  regular: ReadonlyArray<Interpolation<ThemeProps<any>>>;
};

export const typography: Typography = {
  regular: css`
    color: ${() => colors.regularText};
    font-family: ${() => fontFamilies.primary};
  `,
};
