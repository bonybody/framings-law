import { useEffect, useState } from 'react'

import { apiClient } from '@/lib/api'
import { useAuthContext } from '@/module/auth'

import { DeleteCard } from '../DeleteCard'
import { VotingResult } from '../VotingResul'

export const Totalling = ({
  gameId,
  deletedCardId,
  end
}: {
  gameId: string
  deletedCardId: string
  end: boolean
}) => {
  const { idToken } = useAuthContext()
  const [current, setCurrent] = useState<'showDeleted' | 'message'>('showDeleted')

  useEffect(() => {
    void setTimeout(() => {
      setCurrent('message')
      setTimeout(async () => {
        await apiClient({ idToken }).games._gameId_string(gameId).health_check.$post()
      }, 3000)
    }, 3000)
  }, [])

  return (
    <div>
      {current === 'showDeleted' && <DeleteCard gameId={gameId} cardId={deletedCardId} />}
      {current === 'message' && <VotingResult end={end} />}
    </div>
  )
}
