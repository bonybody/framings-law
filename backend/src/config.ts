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
};
