import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth'

import { firebaseAuth } from '@/lib/firebase'

type HandleAuth = (value: User) => void

export const login = (handleAuth: HandleAuth) => {
  onAuthStateChanged(firebaseAuth, async (user) => {
    if (!user) {
      const { user: _user } = await signInAnonymously(firebaseAuth)
      handleAuth(_user)
      return
    }

    handleAuth(user)
  })
}
