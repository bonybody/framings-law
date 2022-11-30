import '@emotion/react'

import { Colors, Fonts } from '@/themes/theme'

declare module '@emotion/react' {
  interface Theme {
    fonts: Fonts
    colors: Colors
    shadow: string
    opacity: string
  }
}
