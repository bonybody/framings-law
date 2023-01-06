// import { useAuthContext } from '@/module/auth'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { apiClient } from '@/lib/api'
import { useAuthContext } from '@/module/auth'

import { useRoom } from '../../hooks/useRoom'
import { Room } from '../../types'
import { RoomUsers } from './RoomUsers'

export const WaitingRoom = () => {
  const router = useRouter()
  const { roomId } = router.query
  const { roomUsers } = useRoom(roomId as string)
  const [room, setRoom] = useState<Room | undefined>(undefined)
  const { idToken } = useAuthContext()

  useEffect(() => {
    void (async () => {
      const res = await apiClient({ idToken })
        .rooms._roomId_string(roomId as string)
        .$get()
      if (!res) return console.error('not found room')
      setRoom(res as Room)
      console.log(res)
    })()
  }, [])
  // const { idToken } = useAuthContext()

  return <div>{room && <RoomUsers room={room} roomUsers={roomUsers} />}</div>
}
