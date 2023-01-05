import { useState } from 'react'
import { useQuery } from 'react-query'

import { GameCard } from '@/api/@types'
import { apiClient, ApiClientOptions } from '@/lib/api'

import { GameId } from '../types'

type GetPostCardOptions = Pick<ApiClientOptions, 'idToken'> & {
  gameId: GameId
  isDeleted?: boolean
  isFlaming?: boolean
}

export const getPostCard = async ({
  idToken,
  gameId,
  isDeleted,
  isFlaming
}: GetPostCardOptions) => {
  /**
   * コメンタリティとbodyの違い
   */
  const { cards } = await apiClient({ idToken })
    .games._gameId(gameId)
    .cards.$get({
      query: {
        is_deleted: isDeleted,
        is_framing: isFlaming
      }
    })

  return cards
}

type UsePostCardState = {
  cardList: undefined | GameCard[]
  isLoading: boolean
}

export const usePostCard = (options: GetPostCardOptions) => {
  const [state, setState] = useState<UsePostCardState>({
    cardList: undefined,
    isLoading: true
  })

  useQuery({
    queryKey: `usePostCard/${options.gameId}`,
    queryFn: () => getPostCard(options),
    onSuccess: (data) =>
      setState({
        cardList: data,
        isLoading: false
      }),
    refetchOnMount: 'always'
  })

  return state
}
