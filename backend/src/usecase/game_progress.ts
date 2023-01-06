import { addSeconds, getNow } from "../lib/dayjs";
import { gameTriggers } from "../lib/pusher";
import { GameProgress, LifeCycle, lifeCycleList } from "../model";
import {
  GameProgressRepository,
  GameRepository,
  GameStatusRepository,
} from "../repository";
import { GameCardUseCase } from "./game_card";

export class GameProgressUseCase {
  private gameProgressRepository: GameProgressRepository;
  private gameCardUseCase: GameCardUseCase;
  private gameStatusRepository: GameStatusRepository;
  private gameRepository: GameRepository;

  constructor(
    gameProgressRepository: GameProgressRepository,
    gameCardUseCase: GameCardUseCase,
    gameStatusRepository: GameStatusRepository,
    gameRepository: GameRepository
  ) {
    this.gameProgressRepository = gameProgressRepository;
    this.gameCardUseCase = gameCardUseCase;
    this.gameStatusRepository = gameStatusRepository;
    this.gameRepository = gameRepository;
  }

  static factory() {
    return new GameProgressUseCase(
      new GameProgressRepository(),
      GameCardUseCase.factory(),
      new GameStatusRepository(),
      new GameRepository()
    );
  }

  async now(gameId: string): Promise<GameProgress> {
    const progress = await this.gameProgressRepository.find(gameId);
    if (!lifeCycleList.includes(progress.phase as LifeCycle)) throw new Error();
    return {
      turn: progress.turn,
      phase: progress.phase as LifeCycle,
      phaseContent: progress.phaseContent,
    };
  }

  async update(
    gameId: string,
    turn: number,
    phase: LifeCycle,
    phaseContent?: string
  ): Promise<GameProgress> {
    await this.gameProgressRepository.create(gameId, turn, phase, phaseContent);
    return await this.now(gameId);
  }

  async ready(gameId: string, turn: number) {
    this.gameProgressRepository.find(gameId);
    await gameTriggers.ready(gameId, turn);
    await this.update(gameId, turn, "ready");
  }

  async debate(gameId: string, turn: number) {
    const now = getNow();
    const timeLimit = addSeconds(now, 30).toDate().toISOString();
    await gameTriggers.debate(gameId, turn, timeLimit);
    await this.update(gameId, turn, "debate", JSON.stringify({ timeLimit }));
  }

  async vote(gameId: string, turn: number) {
    // const res = await this.gameCardUseCase;
    await gameTriggers.vote(gameId, turn);
    await this.update(gameId, turn, "vote");
  }

  async totalling(gameId: string, turn: number) {
    const deletedCard = await this.gameCardUseCase.totalling(gameId);

    const remainingFlamingCount = await this.gameCardUseCase.countFraming(
      gameId
    );

    const remainingCards = await this.gameCardUseCase.search(gameId, {
      isDeleted: false,
    });

    const isEnd =
      remainingFlamingCount < 1 ||
      remainingCards.length === remainingFlamingCount;
    await gameTriggers.totalling(gameId, turn, deletedCard.id, isEnd);
    await this.update(
      gameId,
      turn,
      "totalling",
      JSON.stringify({
        deletedCardId: deletedCard.id,
        end: isEnd,
      })
    );
  }
  async nextTurnOrResult(gameId: string, turn: number) {
    const remainingFlamingCount = await this.gameCardUseCase.countFraming(
      gameId
    );

    const remainingCards = await this.gameCardUseCase.search(gameId, {
      isDeleted: false,
    });

    const isEnd =
      remainingFlamingCount < 1 ||
      remainingCards.length === remainingFlamingCount;

    if (isEnd) {
      let winner = "";
      if (remainingFlamingCount < 1) winner = "finder";
      if (remainingCards.length === remainingFlamingCount) winner = "framer";
      const status = await this.gameStatusRepository.findByCode(winner);
      if (status === null) throw new Error();
      const res = await this.gameRepository.changeStatus(gameId, status.id);
      console.log(res);
      await await this.update(gameId, turn, "result");
      gameTriggers.result(gameId, turn);
    } else {
      await this.debate(gameId, ++turn);
    }
  }

  async result(gameId: string, turn: number) {}
}
