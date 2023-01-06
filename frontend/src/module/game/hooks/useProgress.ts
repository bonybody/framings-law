import { useEffect, useState } from 'react'

import { apiClient } from '@/lib/api'
import { gameEvents } from '@/lib/pusher'
import { useAuthContext } from '@/module/auth'

import { Progress } from '../types'

export const useProgress = (gameId: string) => {
  const [progress, setProgress] = useState<Progress | undefined>()
  const { idToken } = useAuthContext()

  useEffect(() => {
    void (async () => {
      const res = await apiClient({ idToken }).games._gameId(gameId).$get()
      console.log(res)

      setProgress({
        turn: res.turn ?? 0,
        phase: (res.phase as unknown as Progress['phase']) ?? 'ready',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        phaseContent: res.phaseContent ? JSON.parse(res.phaseContent) : undefined
      })
    })()
  }, [])

  useEffect(() => {
    console.log(progress)
  }, [progress])

  useEffect(() => {
    gameEvents.ready(gameId, (data) => {
      console.log('ready:', data)
      setProgress({
        turn: data.turn,
        phase: 'ready'
      })
    })
    gameEvents.debate(gameId, (data) => {
      console.log('debate:', data)
      setProgress({
        turn: data.turn,
        phase: 'debate',
        phaseContent: { timeLimit: data.timeLimit }
      })
    })
    gameEvents.vote(gameId, (data) => {
      console.log('vote:', data)
      setProgress({
        turn: data.turn,
        phase: 'vote'
      })
    })
    gameEvents.totalling(gameId, (data) => {
      console.log('totalling', data)
      setProgress({
        turn: data.turn,
        phase: 'totalling',
        phaseContent: { deletedCardId: data.deletedGameCardId, end: data.end }
      })
    })
    gameEvents.result(gameId, (data) => {
      console.log('result:', data)
      setProgress({
        turn: data.turn,
        phase: 'result'
      })
    })
  }, [])

  return { progress }
}
