export type RoomUsers = {
  join: string[]
  ready: string[]
}

export type Room = {
  id: string
  hostUserId: string
  cardCount: number
  debateSeconds: number
  key: string
  status: { id: string; code: string }
}
