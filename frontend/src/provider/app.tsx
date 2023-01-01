import { Global, ThemeProvider } from '@emotion/react'
import { ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { queryClient } from '@/lib/react-query'
import { AuthProvider } from '@/module/auth'
import { styles, theme } from '@/styles'

import { Middleware } from './middleware'

type Props = {
  children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools /> {/* 本番環境は消す */}
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Global styles={styles} />
          <Middleware>{children}</Middleware>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
