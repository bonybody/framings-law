import { addSeconds, getNow } from "../lib/dayjs";
import { gameTriggers } from "../lib/pusher";
import { GameProgress, LifeCycle, lifeCycleList } from "../model";
import { GameProgressRepository } from "../repository";
import { GameCardUseCase } from "./game_card";

export class GameProgressUseCase {
  private gameProgressRepository: GameProgressRepository;
  private gameCardUseCase: GameCardUseCase;

  constructor(
    gameProgressRepository: GameProgressRepository,
    gameCardUseCase: GameCardUseCase
  ) {
    this.gameProgressRepository = gameProgressRepository;
    this.gameCardUseCase = gameCardUseCase;
  }

  static factory() {
    return new GameProgressUseCase(
      new GameProgressRepository(),
      GameCardUseCase.factory()
    );
  }

  async now(gameId: string): Promise<GameProgress> {
    const progress = await this.gameProgressRepository.find(gameId);
    if (lifeCycleList.includes(progress.phase as LifeCycle)) throw new Error();
    return {
      turn: progress.turn,
      phase: progress.phase as LifeCycle,
    };
  }

  async next(gameId: string) {
    const now = await this.now(gameId);
  }

  async ready(gameId: string, turn: number) {
    this.gameProgressRepository.find(gameId);
    const res = await this.gameProgressRepository.create(gameId, turn, "ready");
    if (res !== "OK") throw new Error();
    gameTriggers.ready(gameId, turn);
  }

  async debate(gameId: string, turn: number) {
    const res = await this.gameProgressRepository.create(
      gameId,
      turn,
      "debate"
    );
    if (res !== "OK") throw new Error();
    const now = getNow();
    const timeLimit = addSeconds(now, 600);
    gameTriggers.debate(gameId, turn, timeLimit.toDate());
  }

  async vote(gameId: string, turn: number) {
    const res = await this.gameCardUseCase;
  }

  async totalling(gameId: string, turn: number) {
    const res = await this.gameCardUseCase.totalling(gameId);
    gameTriggers.totalling(gameId, turn, res.game_id);
  }
}
