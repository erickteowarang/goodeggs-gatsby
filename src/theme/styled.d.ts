import {} from 'styled-components';
import { CustomThemeProps } from './';

declare module 'styled-components' {
    export interface DefaultTheme extends CustomThemeProps {} // extends the global DefaultTheme with our ThemeType.
}
