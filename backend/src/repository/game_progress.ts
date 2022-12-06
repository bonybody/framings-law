import { setObject } from "../lib/ioredis";

export class GameProgressRepository {
  async update(
    gameId: string,
    turn: number,
    phase: "ready" | "debate" | "vote" | "totalling"
  ) {
    return await setObject(gameId, { turn, phase });
  }
}
