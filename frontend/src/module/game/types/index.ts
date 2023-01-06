export type GameType = {
  //
}

export type GameId = string | number

export type Progress = {
  turn: number
  phase: 'ready' | 'debate' | 'vote' | 'totalling' | 'result'
  phaseContent?: object
}
