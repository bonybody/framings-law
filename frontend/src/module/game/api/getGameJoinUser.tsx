import { useState } from 'react'
import { useQuery } from 'react-query'

import { ApiHookState } from '@/@types'
import { ApiClientOptions } from '@/lib/api'

// import { apiClient, ApiClientOptions } from '@/lib/api'
import { GameId } from '../types'

type GetGameJoinUserOptions = Pick<ApiClientOptions, 'idToken'> & {
  gameId: GameId
}

export const getGameJoinUser = async ({ idToken, gameId }: GetGameJoinUserOptions) => {
  // const res = await apiClient({ idToken }).games._gameId(gameId).players.$get()
  console.log(idToken)
  const res = {
    players: [
      {
        id: '1',
        userId: '1',
        gameId: gameId,
        isFramer: true,
        character: {
          id: 'id',
          displayName: 'anne',
          imageUrl: 'anne'
        }
      },
      {
        id: '2',
        userId: '2',
        gameId: gameId,
        isFramer: true,
        character: {
          id: 'id',
          displayName: 'anne',
          imageUrl: 'anne'
        }
      },
      {
        id: '3',
        userId: '3',
        gameId: gameId,
        isFramer: true,
        character: {
          id: 'id',
          displayName: 'anne',
          imageUrl: 'anne'
        }
      },
      {
        id: '4',
        userId: '4',
        gameId: gameId,
        isFramer: true,
        character: {
          id: 'id',
          displayName: 'anne',
          imageUrl: 'anne'
        }
      },
      {
        id: '5',
        userId: '5',
        gameId: gameId,
        isFramer: true,
        character: {
          id: 'id',
          displayName: 'anne',
          imageUrl: 'anne'
        }
      }
    ]
  }

  return await Promise.resolve(res)
  // return res
}

type UseGameJoinUserState = ApiHookState & {
  userList:
    | undefined
    | {
        players: {
          id: string
          userId: string
          gameId: string | number
          isFramer: boolean
          character: {
            id: string
            displayName: string
            imageUrl: string
          }
        }[]
      }
}
export const useGameJoinUser = (options: GetGameJoinUserOptions) => {
  const [state, setState] = useState<UseGameJoinUserState>({
    userList: undefined,
    isLoading: true
  })

  useQuery({
    queryKey: `useGameJoinUser/${options.gameId}`,
    queryFn: () => getGameJoinUser(options),
    onSuccess: (data) =>
      setState({
        userList: data,
        isLoading: false
      }),
    refetchOnMount: 'always'
  })

  return state
}
