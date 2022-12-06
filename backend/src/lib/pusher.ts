import Pusher from "pusher";
import { CONFIG } from "../config";
const config = CONFIG.pusher;

const pusher = new Pusher({
  appId: config.appId,
  key: config.appKey,
  secret: config.appSecret,
  cluster: "ap3",
  useTLS: true,
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
    return pusher.trigger(`room-${roomId}`, "changeState", {
      gameId,
    });
  },
};

type GameProgress = {
  turn: number;
  phase: "ready" | "debate" | "vote" | "totalling";
};

export const gameTriggers = {
  debate: async (gameId: string, status: "start" | "end", seconds: number) => {
    return pusher.trigger(`game-${gameId}`, "debate", { status, seconds });
  },
  progress: async (gameId: string, progress: GameProgress) => {
    return pusher.trigger(`game-${gameId}`, "progress", { progress });
  },
  end: async (gameId: string, winner: "framer" | "finder") => {
    return pusher.trigger(`game-${gameId}`, "end", { winner });
  },
};
