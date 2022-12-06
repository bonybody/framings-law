import { FirebaseOptions } from "firebase/app";

type Config = {
  server: {
    port: number;
  };
  db: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
  firebase: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };
  redis: {
    host: string;
    port: number;
  };
  pusher: {
    appId: string;
    appKey: string;
    appSecret: string;
  };
};

export const CONFIG: Config = {
  server: {
    port: parseInt(process.env.PORT),
  },
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  firebase: {
    apiKey: process.env.FIRE_API_KEY,
    authDomain: process.env.FIRE_AUTH_DOMEIN,
    projectId: process.env.FIRE_PROJECT_ID,
    storageBucket: process.env.FIRE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIRE_MESSAGING_SENDER_ID,
    appId: process.env.FIRE_APP_ID,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
  },
  pusher: {
    appId: process.env.PUSHER_APP_ID,
    appKey: process.env.PUSHER_APP_KEY,
    appSecret: process.env.PUSHER_APP_SECRET,
  },
};
