import { GameCardWithDetail } from "../model";
import {
  GameCardRepository,
  CardRepository,
  GamePlayerRepository,
} from "../repository";
import { getMostCountValue } from "../util";

export class GameCardUseCase {
  private gameCardRepository: GameCardRepository;
  private cardRepository: CardRepository;
  private gamePlayerRepository: GamePlayerRepository;
  constructor(
    gameCardRepository: GameCardRepository,
    cardRepository: CardRepository,
    gamePlayerRepository: GamePlayerRepository
  ) {
    this.gameCardRepository = gameCardRepository;
    this.cardRepository = cardRepository;
    this.gamePlayerRepository = gamePlayerRepository;
  }

  static factory() {
    return new GameCardUseCase(
      new GameCardRepository(),
      new CardRepository(),
      new GamePlayerRepository()
    );
  }

  async register(gameId: string, cardId: string) {
    return await this.gameCardRepository.create({
      cardId,
      gameId,
      isDeleted: false,
    });
  }

  async init(gameId: string, cardCount: number) {
    // ゲームカード作成
    const framingCount = cardCount / 2 - 1;
    const framingCards = await this.cardRepository.searchByIsFramingLimit(
      true,
      framingCount
    );
    if (framingCards === null) throw new Error();
    framingCards.map((framingCard) => {
      this.register(gameId, framingCard.id);
    });
    const innocentCount = cardCount - framingCount;
    const innocentCards = await this.cardRepository.searchByIsFramingLimit(
      false,
      innocentCount
    );
    if (innocentCards === null) throw new Error();

    innocentCards.map((innocentCard) => {
      this.register(gameId, innocentCard.id);
    });
  }

  async get(gameId: string) {
    const res = await this.gameCardRepository.getWithDetail(gameId);
    return res.map((gameCard): GameCardWithDetail => {
      return {
        id: gameCard.id,
        gameId: gameCard.game_id,
        card: {
          id: gameCard.card_id,
          postedAt: gameCard.posted_at.toISOString(),
          body: gameCard.body,
          commentary: gameCard.commentary,
          isFraming: gameCard.is_framing,
        },
        isDeleted: gameCard.is_deleted,
      };
    });
  }

  async search(
    gameId: string,
    options?: { isFraming?: boolean; isDeleted?: boolean }
  ) {
    const res = await this.gameCardRepository.search(gameId, options);
    if (!res) throw new Error();
    return res.map((gameCard): GameCardWithDetail => {
      return {
        id: gameCard.id,
        gameId: gameCard.game_id,
        card: {
          id: gameCard.card_id,
          postedAt: gameCard.posted_at.toISOString(),
          body: gameCard.body,
          commentary: gameCard.commentary,
          isFraming: gameCard.is_framing,
        },
        isDeleted: gameCard.is_deleted,
      };
    });
  }

  async find(id: string) {
    const gameCard = await this.gameCardRepository.findWithDetail(id);
    if (gameCard === null) throw new Error();
    return {
      id: gameCard.id,
      gameId: gameCard.game_id,
      card: {
        id: gameCard.card_id,
        postedAt: gameCard.posted_at.toISOString(),
        body: gameCard.body,
        commentary: gameCard.commentary,
        isFraming: gameCard.is_framing,
      },
      isDeleted: gameCard.is_deleted,
    };
  }

  async vote(id: string, gameId: string, playerId: string) {
    // 投票
    await this.gameCardRepository.pushPool(id, gameId, playerId);
    // 全員投票しているか確認
    const inGamePlayers = await this.gamePlayerRepository.get(gameId);
    if (inGamePlayers === null) throw new Error();
    const userPool = await this.gameCardRepository.getVostedUserPool(gameId);
    let isVotedAll = true;
    const votedPlayers = inGamePlayers.map((player, index) => {
      const isVoted = userPool.includes(player.id);
      if (!isVoted) isVotedAll = false;
      return player.id;
    });
    if (!isVotedAll) return;
  }

  async totalling(gameId: string) {
    // 一番投票されている投稿を削除
    const cardPool = await this.gameCardRepository.getVostedCardPool(gameId);
    const mostedValue = getMostCountValue(cardPool);
    if (mostedValue.length < 1) throw new Error("投稿が見つかりませんでした");
    const deleted = await this.gameCardRepository.raiseDeleteflag(
      mostedValue[0]
    );
    if (deleted === null) throw new Error();
    const remainingCount = await this.countFraming(gameId);
    return deleted;
  }

  async countFraming(gameId: string) {
    const options = {
      isFramiing: true,
      isDeleted: false,
    };
    const res = await this.gameCardRepository.search(gameId, options);
    if (res === undefined) return 0;
    return res.length;
  }
}
