export type GamePlayer = {
  id: string;
  userId: string;
  gameId: string;
  isFramer: boolean;
  character: {
    id: string;
    displayName: string;
    imageUrl: string;
  };
};
