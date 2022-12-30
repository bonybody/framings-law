import { type } from "os";
import { Pool, PoolConfig, QueryConfig } from "pg";
import { CONFIG } from "../config";

export const getPool = () => {
  const config: PoolConfig = CONFIG.db;
  return new Pool(config);
};

export const singleQuery = async <T extends object>(
  queryConfig: string | QueryConfig<any>,
  values?: any[]
) => {
  const pool = getPool();
  return await pool.query<T>(queryConfig, values);
};

export type RowInterface<T> = {
  toEntity: () => T;
};
