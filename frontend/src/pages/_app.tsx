import { Global, ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import { styles } from '@/styles/global'
import { theme } from '@/themes/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
