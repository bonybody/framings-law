import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { apiClient } from '@/lib/api'
import { roomEvents } from '@/lib/pusher'
import { useAuthContext } from '@/module/auth'

import { RoomUsers } from '../types'

export const useRoom = (roomId: string) => {
  const [roomUsers, setRoomUsers] = useState<RoomUsers>({ join: [], ready: [] })
  const router = useRouter()
  const { idToken } = useAuthContext()

  useEffect(() => {
    void (async () => {
      const res = await apiClient({ idToken }).rooms._roomId_string(roomId).users.$get()
      console.log(res)
      setRoomUsers({
        join: res.join ?? [],
        ready: res.ready ?? []
      })
    })()
  }, [])

  useEffect(() => {
    roomEvents.join(roomId, (data) => {
      console.log(data)
      setRoomUsers({
        join: data.users,
        ready: roomUsers.ready
      })
    })
    roomEvents.ready(roomId, (data) => {
      console.log(data)
      setRoomUsers({
        join: roomUsers.join,
        ready: data.users
      })
    })
    roomEvents.start(roomId, async (data) => {
      console.log(data)
      await router.push(`/games/${data.gameId}`)
    })
  }, [])

  return { roomUsers, setRoomUsers }
}
