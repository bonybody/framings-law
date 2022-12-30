export type GameCard = {
  id: string;
  gameId: string;
  cardId: string;
  isDeleted: string;
};

export type GameCardWithDetail = {
  id: string;
  gameId: string;
  card: {
    id: string;
    postedAt: string;
    body: string;
    commentary: string;
    isFraming: boolean;
  };
  isDeleted: boolean;
};
