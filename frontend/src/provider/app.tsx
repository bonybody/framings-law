import { Global, ThemeProvider } from '@emotion/react'
import { ReactNode } from 'react'

import { AuthProvider } from '@/module/auth'
import { styles, theme } from '@/styles'

import { Middleware } from './middleware'

type Props = {
  children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Global styles={styles} />
        <Middleware>{children}</Middleware>
      </ThemeProvider>
    </AuthProvider>
  )
}
