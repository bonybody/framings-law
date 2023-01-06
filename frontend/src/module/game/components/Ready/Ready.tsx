// import { useEffect } from 'react'

import { apiClient } from '@/lib/api'
import { useAuthContext } from '@/module/auth'

import { GameId } from '../../types'
import { Assignment } from '../Assignment'

export type ResultProps = {
  gameId: GameId
}

export const Ready = ({ gameId }: ResultProps) => {
  const { idToken } = useAuthContext()
  const onClick = async () => {
    await apiClient({ idToken }).games._gameId_string(gameId.toString()).health_check.$post()
  }
  return (
    <div>
      <Assignment gameId={gameId.toString()} />
      <button onClick={onClick}>health check</button>
    </div>
  )
}
