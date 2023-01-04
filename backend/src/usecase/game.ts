import { gameTriggers, roomTriggers } from "../lib/pusher";
import {
  RoomRepository,
  GameStatusRepository,
  GameRepository,
} from "../repository";
import { GameCardUseCase } from "./game_card";
import { GamePlayerUseCase } from "./game_player";
import { GameProgressUseCase } from "./game_progress";

export class GameUseCase {
  private roomRepository: RoomRepository;
  private gameStatusRepository: GameStatusRepository;
  private gameRepository: GameRepository;
  private gamePlayerUseCase: GamePlayerUseCase;
  private gameCardUseCase: GameCardUseCase;
  private gameProgressUseCase: GameProgressUseCase;
  constructor(
    roomRepository: RoomRepository,
    gameStatusRepository: GameStatusRepository,
    gameRepository: GameRepository,
    gamePlayerUseCase: GamePlayerUseCase,
    gameCardUseCase: GameCardUseCase,
    gameProgressUseCase: GameProgressUseCase
  ) {
    this.roomRepository = roomRepository;
    this.gameStatusRepository = gameStatusRepository;
    this.gameRepository = gameRepository;
    this.gamePlayerUseCase = gamePlayerUseCase;
    this.gameCardUseCase = gameCardUseCase;
    this.gameProgressUseCase = gameProgressUseCase;
  }

  static factory() {
    return new GameUseCase(
      new RoomRepository(),
      new GameStatusRepository(),
      new GameRepository(),
      GamePlayerUseCase.factory(),
      GameCardUseCase.factory(),
      GameProgressUseCase.factory()
    );
  }

  async create(roomId: string) {
    const room = await this.roomRepository.find(roomId);
    if (room === null) throw new Error();
    const status = await this.gameStatusRepository.findByCode("playing");
    if (status === null) throw new Error();
    // ゲーム作成
    const body = {
      roomId: room.id,
      gameStatusId: status.id,
    };
    const game = await this.gameRepository.create(body);
    if (game === null) throw new Error();
    await this.gameCardUseCase.init(game.id, room.card_count);
    await this.gamePlayerUseCase.init(roomId, game.id);
    await roomTriggers.start(roomId, game.id);
    await this.gameProgressUseCase.update(game.id, 1, "ready");
    await gameTriggers.ready(game.id, 1);
    return game.id;
  }

  async ready(gameId: string, userId: string) {}
}
