import { deleteValue, getList, pushList } from "../lib/ioredis";

export class GameHealthCheckRepository {
  async create(gameId: string, playerId: string) {
    return pushList(`rooms/${gameId}/health-check`, [playerId]);
  }

  async get(gameId: string) {
    return getList(`rooms/${gameId}/health-check`);
  }

  async delete(gameId: string) {
    return deleteValue(`rooms/${gameId}/health-check`);
  }
}
