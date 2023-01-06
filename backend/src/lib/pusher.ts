import Pusher from "pusher";
import { CONFIG } from "../config";
const config = CONFIG.pusher;

const pusher = new Pusher({
  appId: config.appId,
  key: config.appKey,
  secret: config.appSecret,
  cluster: "ap3",
});

export const getTrigger = () => {
  return pusher;
};

export const roomTriggers = {
  join: async (roomId: string, users: string[]) => {
    return pusher.trigger(`room-${roomId}`, "join", { users });
  },
  ready: async (roomId: string, users: string[]) => {
    return pusher.trigger(`room-${roomId}`, "ready", { users });
  },
  start: async (roomId: string, gameId: string) => {
    return pusher.trigger(`room-${roomId}`, "start", {
      gameId,
    });
  },
};

type GameProgress = {
  turn: number;
  phase: "ready" | "debate" | "vote" | "totalling" | "result";
};

export const gameTriggers = {
  ready: async (gameId: string, turn: number) => {
    return pusher.trigger(`game-${gameId}`, "ready", { turn });
  },
  debate: async (gameId: string, turn: number, timeLimit: string) => {
    return pusher.trigger(`game-${gameId}`, "debate", {
      turn,
      timeLimit,
    });
  },
  vote: async (gameId: string, turn: number) => {
    return pusher.trigger(`game-${gameId}`, "vote", { turn });
  },
  totalling: async (
    gameId: string,
    turn: number,
    deletedGameCardId: string,
    end: boolean
  ) => {
    return pusher.trigger(`game-${gameId}`, "totalling", {
      turn,
      deletedGameCardId,
      end,
    });
  },
  result: async (gameId: string, turn: number) => {
    return pusher.trigger(`game-${gameId}`, "result", { turn });
  },
};
