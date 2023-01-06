export type Room = {
  id: string;
  hostUserId: string;
  status: {
    id: string;
    code: string;
  };
  key: string;
  cardCount: number;
  debateSeconds: number;
};

export type RoomUsers = {
  join: string[];
  ready: string[];
};
