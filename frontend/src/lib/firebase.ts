import { FirebaseOptions, initializeApp } from 'firebase/app'

import { FIREBASE } from '@/config'

const config: FirebaseOptions = {
  apiKey: FIREBASE.API_KEY,
  authDomain: FIREBASE.AUTH_DOMAIN,
  projectId: FIREBASE.PROJECT_ID,
  storageBucket: FIREBASE.STORAGE_BUCKET,
  messagingSenderId: FIREBASE.MESSAGING_SENDER_ID,
  appId: FIREBASE.APP_ID
}

export const firebaseApp = initializeApp(config)
