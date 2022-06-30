import 'styled-components';
import { Theme } from './themes/primaryTheme/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
