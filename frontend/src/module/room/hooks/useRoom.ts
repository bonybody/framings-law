import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { apiClient } from '@/lib/api'
import { roomEvents } from '@/lib/pusher'
import { useAuthContext } from '@/module/auth'

import { RoomUsers } from '../types'

export const useRoom = (roomId: string) => {
  const [roomUsers, setRoomUsers] = useState<RoomUsers>({ join: [], ready: [] })
  const router = useRouter()
  const { idToken } = useAuthContext()

  useEffect(() => {
    ;async () => {
      const res = await apiClient({ idToken }).rooms._roomId_string(roomId).users.$get()
      console.log(res)
      setRoomUsers({
        join: res.join ?? [],
        ready: res.ready ?? []
      })
    }
  }, [])

  useCallback(() => {
    roomEvents.join(roomId, (data) => {
      console.log(data)
      setRoomUsers({
        join: data.users,
        ready: roomUsers.ready
      })
    })
  }, [])

  useCallback(() => {
    roomEvents.ready(roomId, (data) => {
      console.log(data)
      setRoomUsers({
        join: roomUsers.join,
        ready: data.users
      })
    })
  }, [])

  useCallback(() => {
    roomEvents.start(roomId, async (data) => {
      console.log(data)
      await router.push(`/games/${data.gameId}`)
    })
  }, [])

  return { roomUsers, setRoomUsers }
}
