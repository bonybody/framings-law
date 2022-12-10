import { getObject, setObject } from "../lib/ioredis";

type Progress = {
  turn: number;
  phase: "ready" | "debate" | "vote" | "totalling" | "result";
  phaseContent?: object;
};

export class GameProgressRepository {
  async find(gameId: string) {
    return (await getObject(`games/${gameId}/progress`)) as unknown as Progress;
  }
  async create(
    gameId: string,
    turn: number,
    phase: "ready" | "debate" | "vote" | "totalling" | "result",
    phaseContent?: object
  ) {
    return await setObject(`games/${gameId}/progress`, {
      turn,
      phase,
      phaseContent,
    });
  }
}
