import { GameCardRepository, CardRepository } from "../repository";

export class GameCardUseCase {
  private gameCardRepository: GameCardRepository;
  private cardRepository: CardRepository;
  constructor(
    gameCardRepository: GameCardRepository,
    cardRepository: CardRepository
  ) {
    this.gameCardRepository = gameCardRepository;
    this.cardRepository = cardRepository;
  }

  static factory() {
    return new GameCardUseCase(new GameCardRepository(), new CardRepository());
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
      true,
      innocentCount
    );
    if (innocentCards === null) throw new Error();

    innocentCards.map((innocentCard) => {
      this.register(gameId, innocentCard.id);
    });
  }

  async vote(userId: string, gameCardId: string) {}
}
