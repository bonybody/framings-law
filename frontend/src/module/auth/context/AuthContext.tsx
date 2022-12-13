import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type AuthContext = {
  uid: string
  isAnonymous: boolean | null
}

type SetAuthContext = Dispatch<SetStateAction<AuthContext>>

const customCreateContext = <
  T extends Record<string, unknown> | ((value: SetStateAction<AuthContext>) => void)
>() => {
  const context = createContext<T | undefined>(undefined)

  const _useContext = () => {
    const _context = useContext(context)
    if (!_context) throw new Error('useCtx does not exist inside the provider')
    return _context
  }

  return [_useContext, context] as const
}

const [useAuthContext, authContext] = customCreateContext<AuthContext>()
const [useSetAuthContext, setAuthContext] = customCreateContext<SetAuthContext>()

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthContext>({
    uid: '',
    isAnonymous: null
  })

  return (
    <authContext.Provider value={user}>
      <setAuthContext.Provider value={setUser}>{children}</setAuthContext.Provider>
    </authContext.Provider>
  )
}

export { AuthProvider, useAuthContext, useSetAuthContext }
