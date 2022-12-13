declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: string;
        PUBLIC_URL: string;
        PORT: string;
        DB_HOST: string;
        DB_PORT: string;
        DB_USER: string;
        DB_PASSWORD: string;
        DB_DATABASE: string;
        FIRE_API_KEY: string;
        FIRE_AUTH_DOMEIN: string;
        FIRE_PROJECT_ID: string;
        FIRE_STORAGE_BUCKET: string;
        FIRE_MESSAGING_SENDER_ID: string;
        FIRE_APP_ID: string;
        REDIS_HOST: string;
        REDIS_PORT: string;
        PUSHER_APP_ID: string;
        PUSHER_APP_KEY: string;
        PUSHER_APP_SECRET: string;
      }
    }
  }
}
