import { Button, WaitingDiamondShape } from '@/components/Elements'
import { apiClient } from '@/lib/api'
import { useAuthContext } from '@/module/auth'

import { Room, RoomUsers as RoomUsersType } from '../../types'

export type RoomUsersProps = {
  roomUsers: RoomUsersType
  room: Room
}

export const RoomUsers = (props: RoomUsersProps) => {
  const { roomUsers, room } = props
  const { uid, idToken } = useAuthContext()

  const start = async () => {
    const res = await apiClient({ idToken }).games.$post({
      body: {
        roomId: room.id
      }
    })
    if (!res.id) return console.error('not found create game id')
  }
  const ready = async () => {
    if (roomUsers.ready.includes(uid)) return
    const res = await apiClient({ idToken }).rooms._roomId_string(room.id).readies.$post()
    if (!res) return console.error('missing ready request')
  }

  //   const { idToken } = useAuthContext()
  return (
    <div>
      {roomUsers.join.map((value) => {
        return (
          <WaitingDiamondShape
            key={value}
            diagonal={100}
            fontSize={'sm'}
            isJoining={roomUsers.ready.includes(uid)}
          />
        )
      })}
      <div>
        {room.hostUserId === uid && (
          <Button onClick={start} isDisable={roomUsers.join.length !== roomUsers.ready.length}>
            スタート
          </Button>
        )}
        {room.hostUserId !== uid && (
          <Button onClick={ready} isActive={roomUsers.ready.includes(uid)}>
            {roomUsers.ready.includes(uid) ? '準備完了済' : '準備完了'}
          </Button>
        )}
      </div>
    </div>
  )
}
