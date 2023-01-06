/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { apiClient, ApiClientOptions } from '@/lib/api'

import { GameId } from '../types'

export type PostVoteOptions = Pick<ApiClientOptions, 'idToken'> & {
  gameId: GameId
  cardId: string
}

export const postVote = async ({ idToken, gameId, cardId }: PostVoteOptions) => {
  await apiClient({ idToken })
    .games._gameId_string(gameId as string)
    .vote.$post({
      body: {
        gameCardId: cardId
      }
    })
}
