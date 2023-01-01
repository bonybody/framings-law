import { useState } from 'react'
import { useQuery } from 'react-query'

import { GameCard } from '@/api/@types'
import { apiClient } from '@/lib/api'

type GetPostCardOptions = {
  gameId: string | number
  isDeleted?: boolean
  isFlaming?: boolean
}

const getPostCard = async ({ gameId, isDeleted, isFlaming }: GetPostCardOptions) => {
  /**
   * コメンタリティとbodyの違い
   */
  const { cards } = await apiClient()
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
