import { useCallback, useEffect, useState } from 'react'

import { apiClient } from '@/lib/api'
import { gameEvents } from '@/lib/pusher'
import { useAuthContext } from '@/module/auth'

import { Progress } from '../types'

export const useProgress = (gameId: string) => {
  const [progress, setProgress] = useState<Progress | undefined>()
  const { idToken } = useAuthContext()

  useEffect(() => {
    ;async () => {
      const res = await apiClient({ idToken }).games._gameId(gameId).$get()
      setProgress({
        turn: res.turn ?? 0,
        phase: (res.phase as unknown as Progress['phase']) ?? 'ready',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        phaseContent: res.phaseContent
      })
    }
  }, [])

  useCallback(
    () =>
      gameEvents.ready(gameId, (data) => {
        console.log(data)
        setProgress({
          turn: data.turn,
          phase: 'ready'
        })
      }),
    []
  )

  useCallback(
    () =>
      gameEvents.debate(gameId, (data) => {
        console.log(data)
        setProgress({
          turn: data.turn,
          phase: 'debate'
        })
      }),
    []
  )

  useCallback(
    () =>
      gameEvents.vote(gameId, (data) => {
        console.log(data)
        setProgress({
          turn: data.turn,
          phase: 'vote'
        })
      }),
    []
  )

  useCallback(
    () =>
      gameEvents.totalling(gameId, (data) => {
        console.log(data)
        setProgress({
          turn: data.turn,
          phase: 'totalling'
        })
      }),
    []
  )

  useCallback(
    () =>
      gameEvents.result(gameId, (data) => {
        console.log(data)
        setProgress({
          turn: data.turn,
          phase: 'result'
        })
      }),
    []
  )

  return { progress }
}
