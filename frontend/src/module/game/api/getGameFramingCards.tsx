import { useState } from 'react'
import { useQuery } from 'react-query'

import { GameCard } from '@/api/@types'
import { apiClient, ApiClientOptions } from '@/lib/api'

import { GameId } from '../types'

type GetGameFramingCardsOptions = Pick<ApiClientOptions, 'idToken'> & {
  gameId: GameId
}

export const getGameFramingCards = async ({ idToken, gameId }: GetGameFramingCardsOptions) => {
  const { cards } = await apiClient({ idToken })
    .games._gameId(gameId)
    .cards.$get({ query: { is_framing: true } })

  return cards
}

type UseGameFramingCardsState = {
  framingCardList: undefined | GameCard[]
  isLoading: boolean
}

export const useGameFramingCards = (options: GetGameFramingCardsOptions) => {
  const [state, setState] = useState<UseGameFramingCardsState>({
    framingCardList: undefined,
    isLoading: true
  })

  useQuery({
    queryKey: `useGameFramingCard/${options.gameId}`,
    queryFn: () => getGameFramingCards(options),
    onSuccess: (data) =>
      setState({
        framingCardList: data,
        isLoading: false
      }),
    refetchOnMount: 'always'
  })

  return state
}
