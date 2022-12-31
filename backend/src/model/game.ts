export type Game = {
  id: string;
  room_id: string;
  status: {
    id: string;
    code: string;
  };
};

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
