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
      }
    }
  }
}
