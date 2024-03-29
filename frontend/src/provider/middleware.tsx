import { ReactNode, useCallback, useEffect } from 'react'

import { login, useAuthContext, User, useSetAuthContext } from '@/module/auth'

type Props = {
  children: ReactNode
}

export const Middleware = ({ children }: Props) => {
  const { uid } = useAuthContext()
  const setAuth = useSetAuthContext()

  const handleAuth = useCallback((user: User) => {
    setAuth({
      uid: user.uid,
      isAnonymous: user.isAnonymous,
      idToken: user.idToken
    })
  }, [])

  useEffect(() => {
    login(handleAuth)

    return () => {
      login(handleAuth)
    }
  }, [handleAuth])

  if (uid === '') {
    return <>loading...</>
  }

  return <>{children}</>
}
