import { useState } from 'react'
import { useQuery } from 'react-query'

import { ApiHookState } from '@/@types'
// import { apiClient } from '@/lib/api'

type GetGameJoinUserOptions = {
  gameId: string
}

export const getGameJoinUser = async ({ gameId }: GetGameJoinUserOptions) => {
  // const res = await apiClient().games._gameId(gameId).players.$get()
  const res = {
    players: [
      {
        id: '1',
        userId: 'userId',
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
        userId: 'userId',
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
          gameId: string
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
