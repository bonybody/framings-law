export type GameType = {
  //
}

export type GameId = string | number

export type Progress = {
  turn: number
  phase: 'ready' | 'debate' | 'vote' | 'totalling' | 'result'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  phaseContent?: any
}
