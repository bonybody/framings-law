import { onAuthStateChanged, signInAnonymously, User as FirebaseUser } from 'firebase/auth'

import { firebaseAuth } from '@/lib/firebase'

export type User = Pick<FirebaseUser, 'uid' | 'isAnonymous'> & {
  idToken: string
}

type HandleAuth = (value: User) => void

export const login = (handleAuth: HandleAuth) => {
  onAuthStateChanged(firebaseAuth, async (user) => {
    if (!user) {
      // logout
      const { user } = await signInAnonymously(firebaseAuth)
      handleAuth({
        uid: user.uid,
        isAnonymous: user.isAnonymous,
        idToken: ''
      })
      return
    }

    // login
    handleAuth({
      uid: user.uid,
      isAnonymous: user.isAnonymous,
      idToken: await user.getIdToken()
    })
  })
}
