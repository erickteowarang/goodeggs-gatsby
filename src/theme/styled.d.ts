import {} from 'styled-components'
import { ThemeProps } from './'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {} // extends the global DefaultTheme with our ThemeType.
}