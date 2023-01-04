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
    if (!lifeCycleList.includes(progress.phase as LifeCycle)) throw new Error();
    return {
      turn: progress.turn,
      phase: progress.phase as LifeCycle,
    };
  }

  async update(
    gameId: string,
    turn: number,
    phase: LifeCycle,
    phaseContent?: object
  ): Promise<GameProgress> {
    await this.gameProgressRepository.create(gameId, turn, phase, phaseContent);
    return await this.now(gameId);
  }

  async ready(gameId: string, turn: number) {
    this.gameProgressRepository.find(gameId);
    await gameTriggers.ready(gameId, turn);
    await this.update(gameId, turn, "debate");
  }

  async debate(gameId: string, turn: number) {
    const now = getNow();
    const timeLimit = addSeconds(now, 600);
    await gameTriggers.debate(gameId, turn, timeLimit.toDate());
    await this.update(gameId, turn, "vote");
  }

  async vote(gameId: string, turn: number) {
    // const res = await this.gameCardUseCase;
    await this.update(gameId, turn, "totalling");
  }

  async totalling(gameId: string, turn: number) {
    const deletedCard = await this.gameCardUseCase.totalling(gameId);
    const remainingCount = await this.gameCardUseCase.countFraming(gameId);
    const isEnd = remainingCount < 1;
    await gameTriggers.totalling(gameId, turn, deletedCard.id, isEnd);

    if (isEnd) {
      await this.update(gameId, turn, "result");
    } else {
      await this.update(gameId, ++turn, "ready");
    }
  }

  async result(gameId: string, turn: number) {
    gameTriggers.result(gameId, turn);
  }
}
