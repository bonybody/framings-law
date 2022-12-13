import Redis from "ioredis";
import { CONFIG } from "../config";

const redis = new Redis(CONFIG.redis.port, CONFIG.redis.host);
export const pushList = async (key: string, value: string[]) => {
  return await redis.lpush(key, ...value);
};

export const deleteValue = async (key: string) => {
  return await redis.del(key);
};

export const getList = async (key: string) => {
  return await redis.lrange(key, 0, -1);
};

export const getObject = async (key: string) => {
  return await redis.hgetall(key);
};

export const setObject = async (key: string, value: object) => {
  return await redis.hmset(key, value);
};

export const setObjectProperty = async (
  key: string,
  property: string,
  value: any
) => {
  return await redis.hset(key, property, value);
};

export const getObjectPropertyNames = async (key: string) => {
  return await redis.hkeys(key);
};

export const getObjectValues = async (key: string) => {
  return await redis.hvals(key);
};
