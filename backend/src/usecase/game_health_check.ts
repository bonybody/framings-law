import { GameHealthCheckRepository, GamePlayerRepository } from "../repository";
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
      case "ready":
        await this.gameProgressUseCase.next(gameId);
        break;
      case "debate":
        await this.gameProgressUseCase.next(gameId);
        break;
      case "vote":
        await this.gameProgressUseCase.next(gameId);
        break;
      case "totalling":
        await this.
      default:
        break;
    }
  }
}
