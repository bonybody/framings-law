import { useState } from 'react'
import { useQuery } from 'react-query'

import { ApiHookState } from '@/@types'
import { GamePlayer } from '@/api/@types'
import { apiClient, ApiClientOptions } from '@/lib/api'

import { GameId } from '../types'

type GetGameJoinUserOptions = Pick<ApiClientOptions, 'idToken'> & {
  gameId: GameId
}

export const getGameJoinUser = async ({ idToken, gameId }: GetGameJoinUserOptions) => {
  const { players } = await apiClient({ idToken })
    .games._gameId_string(gameId as string)
    .players.$get()
  return players
}

type UseGameJoinUserState = ApiHookState & {
  userList: GamePlayer[]
}

export const useGameJoinUser = (options: GetGameJoinUserOptions) => {
  const [state, setState] = useState<UseGameJoinUserState>({
    userList: [],
    isLoading: true
  })

  useQuery({
    queryKey: `useGameJoinUser/${options.gameId}`,
    queryFn: () => getGameJoinUser(options),
    onSuccess: (data) => {
      let _data: GamePlayer[] = []
      if (data.length < 5) {
        for (let i = data.length; i < 5; i++) {
          _data = [
            ..._data,
            {
              character: {
                displayName: 'noPlayer'
              }
            }
          ]
        }

        setState({
          userList: [...data, ..._data],
          isLoading: false
        })

        return
      }

      setState({
        userList: data,
        isLoading: false
      })
    },
    refetchOnMount: 'always'
  })

  return state
}
