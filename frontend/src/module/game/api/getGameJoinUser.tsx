import { useState } from 'react'
import { useQuery } from 'react-query'

import { ApiHookState } from '@/@types'
import { ApiClientOptions } from '@/lib/api'

import { GameId } from '../types'
// import { apiClient, ApiClientOptions } from '@/lib/api'

type GetGameJoinUserOptions = Pick<ApiClientOptions, 'uid'> & {
  gameId: GameId
}

export const getGameJoinUser = async ({ uid, gameId }: GetGameJoinUserOptions) => {
  // const res = await apiClient({ uid }).games._gameId(gameId).players.$get()
  const res = {
    players: [
      {
        id: '1',
        userId: uid,
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
        userId: uid,
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
        userId: uid,
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
        userId: uid,
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
        userId: uid,
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
