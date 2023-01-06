/* eslint-disable */
export type Room = {
  id?: string | undefined
  hostUserId?: string | undefined
  cardCount?: number | undefined
  debateSeconds?: number | undefined
  key?: string | undefined

  status?: {
    id?: string | undefined
    code?: string | undefined
  } | undefined
}

export type RoomUsers = {
  join?: string[] | undefined
  ready?: string[] | undefined
}

export type RoomJoinUsers = {
  users?: string[] | undefined
}

export type RoomReadyUsers = {
  users?: string[] | undefined
}

export type GamePlayer = {
  id?: string | undefined
  userId?: string | undefined
  gameId?: string | undefined
  isFramer?: boolean | undefined

  character?: {
    id?: string | undefined
    displayName?: string | undefined
    imageUrl?: string | undefined
  } | undefined
}

export type GameCard = {
  id?: string | undefined
  gameId?: string | undefined

  card?: {
    id?: string | undefined
    postedAt?: string | undefined
    body?: string | undefined
    commentary?: string | undefined
    isFraming?: boolean | undefined
  } | undefined

  isDeleted?: boolean | undefined
}

export type Game = {
  turn?: number | undefined
  phase?: string | undefined

  phaseContent?: {
    sample?: string | undefined
  } | undefined
}

export type GameStatus = {
  id?: string | undefined
  code?: string | undefined
}
