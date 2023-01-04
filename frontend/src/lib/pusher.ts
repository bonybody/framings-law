import Pusher from 'pusher-js'

import { PUSHER } from '@/config'

const pusher = new Pusher(PUSHER.APP_KEY, {
  cluster: 'ap3'
})

export const getChannel = (channelName: string) => {
  return pusher.subscribe(channelName)
}

type Users = string[]

// type GameProgress = {
//   turn: number
//   phase: 'ready' | 'debate' | 'vote' | 'totalling' | 'result'
// }

export const roomEvents = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  join: (roomId: string, callback: (data: { users: Users }) => void) => {
    getChannel(`room-${roomId}`).bind('join', callback)
  },
  // eslint-disable-next-line @typescript-eslint/ban-types
  ready: (roomId: string, callback: (data: { users: Users }) => void) => {
    getChannel(`room-${roomId}`).bind('ready', callback)
  },
  // eslint-disable-next-line @typescript-eslint/ban-types
  start: (roomId: string, callback: (data: { gameId: string }) => void) => {
    getChannel(`room-${roomId}`).bind('start', callback)
  }
}

export const gameEvents = {
  ready: (gameId: string, callback: (data: { turn: string }) => void) => {
    getChannel(`game-${gameId}`).bind('ready', callback)
  },
  debate: (gameId: string, callback: (data: { turn: number; timeLimit: Date }) => void) => {
    getChannel(`game-${gameId}`).bind('debate', callback)
  },
  vote: (gameId: string, callback: (data: { turn: number }) => void) => {
    getChannel(`game-${gameId}`).bind('vote', callback)
  },
  totalling: (
    gameId: string,
    turn: number,
    callback: (data: { turn: number; deletedGameCardId: string; end: boolean }) => void
  ) => {
    getChannel(`game-${gameId}`).bind('totalling', callback)
  },
  result: (gameId: string, callback: (data: { turn: number }) => void) => {
    getChannel(`game-${gameId}`).bind('result', callback)
  }
}
