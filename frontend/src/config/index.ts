export const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER as string

export const FIREBASE = {
  API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
  PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
  APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string
}

export const PUSHER = {
  APP_ID: process.env.NEXT_PUBLIC_PUSHER_APP_ID as string,
  APP_KEY: process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
  APP_SECRET: process.env.NEXT_PUBLIC_PUSHER_APP_SECRET as string
}
