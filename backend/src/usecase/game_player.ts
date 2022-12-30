import { getList } from "../lib/ioredis";
import { GamePlayer } from "../model/game";
import { CharacterRepository, GamePlayerRepository } from "../repository";

export class GamePlayerUseCase {
  private gamePlayerRepository: GamePlayerRepository;
  private characterRepository: CharacterRepository;
  constructor(
    gamePlayerRepository: GamePlayerRepository,
    characterRepository: CharacterRepository
  ) {
    this.gamePlayerRepository = gamePlayerRepository;
    this.characterRepository = characterRepository;
  }

  static factory() {
    return new GamePlayerUseCase(
      new GamePlayerRepository(),
      new CharacterRepository()
    );
  }

  async register(
    userId: string,
    gameId: string,
    characterId: string,
    isFramer: boolean
  ) {
    this.gamePlayerRepository.create({
      userId,
      gameId,
      characterId,
      isFramer,
    });
  }

  async init(roomId: string, gameId: string) {
    const framerCount = 2;
    const users = await getList(`rooms/${roomId}/ready`);
    const characters = await this.characterRepository.getLimit(users.length);
    if (characters === null) throw new Error();
    await Promise.all(
      users.map(async (userId, index) => {
        await this.register(
          userId,
          gameId,
          characters.pop()!.id,
          index < framerCount
        );
      })
    );
  }

  async get(gameId: string): Promise<GamePlayer[]> {
    const players = await this.gamePlayerRepository.getWithCharacter(gameId);
    if (players === null) throw new Error();
    return players.map((player) => {
      return {
        id: player.id,
        userId: player.user_id,
        gameId: player.game_id,
        isFramer: player.is_framer,
        character: {
          id: player.character_id,
          displayName: player.display_name,
          imageUrl: player.image_url,
        },
      };
    });
  }

  async find(id: string): Promise<GamePlayer> {
    const player = await this.gamePlayerRepository.findWithCharacter(id);
    if (player === null) throw new Error();
    return {
      id: player.id,
      userId: player.user_id,
      gameId: player.game_id,
      isFramer: player.is_framer,
      character: {
        id: player.character_id,
        displayName: player.display_name,
        imageUrl: player.image_url,
      },
    };
  }

  async findByUserId(gameId: string, userId: string): Promise<GamePlayer> {
    const player = await this.gamePlayerRepository.findWithCharacterByUserId(
      gameId,
      userId
    );
    if (player === null) throw new Error();
    return {
      id: player.id,
      userId: player.user_id,
      gameId: player.game_id,
      isFramer: player.is_framer,
      character: {
        id: player.character_id,
        displayName: player.display_name,
        imageUrl: player.image_url,
      },
    };
  }
}
