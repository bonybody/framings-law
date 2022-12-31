export const lifeCycleList = [
  "ready",
  "debate",
  "vote",
  "totalling",
  "result",
] as const;
export type LifeCycle = typeof lifeCycleList[number];

export type GameProgress = {
  turn: number;
  phase: LifeCycle;
};