import { GameHealthCheckRepository } from "../repository";
import { GamePlayerUseCase } from "./game_player";
import { GameProgressUseCase } from "./game_progress";

export class GameHealthCheckUseCase {
  private gameHealthCheckRepository: GameHealthCheckRepository;
  private gamePlayerUseCase: GamePlayerUseCase;
  private gameProgressUseCase: GameProgressUseCase;
  constructor(
    gameHealthCheckRepository: GameHealthCheckRepository,
    gamePlayerUseCase: GamePlayerUseCase,
    gameProgressUseCase: GameProgressUseCase
  ) {
    this.gameHealthCheckRepository = gameHealthCheckRepository;
    this.gamePlayerUseCase = gamePlayerUseCase;
    this.gameProgressUseCase = gameProgressUseCase;
  }

  static factory() {
    return new GameHealthCheckUseCase(
      new GameHealthCheckRepository(),
      GamePlayerUseCase.factory(),
      GameProgressUseCase.factory()
    );
  }

  async get(gameId: string) {
    return await this.gameHealthCheckRepository.get(gameId);
  }

  async healthCheck(gameId: string) {
    const players = await this.gamePlayerUseCase.get(gameId);
    const pushedList = await this.get(gameId);
    let result = true;
    players.map((player) => {
      if (!pushedList.includes(player.id)) {
        result = false;
      }
    });
    return result;
  }

  async reset(gameId: string) {
    await this.gameHealthCheckRepository.delete(gameId);
  }

  async push(gameId: string, playerId: string) {
    await this.gameHealthCheckRepository.create(gameId, playerId);
    if (await this.healthCheck(gameId)) {
      await this.nextAction(gameId);
    }
  }

  async nextAction(gameId: string) {
    const now = await this.gameProgressUseCase.now(gameId);
    switch (now.phase) {
      case "init":
        break;
      case "ready":
        await this.gameProgressUseCase.debate(gameId, now.turn);
        break;
      case "debate":
        await this.gameProgressUseCase.vote(gameId, now.turn);
        break;
      case "vote":
        await this.gameProgressUseCase.totalling(gameId, now.turn);
        break;
      case "totalling":
        await this.gameProgressUseCase.nextTurnOrResult(gameId, now.turn);
        break;
      case "result":
        break;
      default:
        break;
    }
    await this.reset(gameId);
  }
}
