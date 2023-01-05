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
  console.log(idToken)
  // const res = {
  //   players: [
  //     {
  //       id: '1',
  //       userId: '1',
  //       gameId: gameId,
  //       isFramer: true,
  //       character: {
  //         id: 'id',
  //         displayName: 'anne',
  //         imageUrl: 'anne'
  //       }
  //     },
  //     {
  //       id: '2',
  //       userId: '2',
  //       gameId: gameId,
  //       isFramer: true,
  //       character: {
  //         id: 'id',
  //         displayName: 'anne',
  //         imageUrl: 'anne'
  //       }
  //     },
  //     {
  //       id: '3',
  //       userId: '3',
  //       gameId: gameId,
  //       isFramer: true,
  //       character: {
  //         id: 'id',
  //         displayName: 'anne',
  //         imageUrl: 'anne'
  //       }
  //     },
  //     {
  //       id: '4',
  //       userId: '4',
  //       gameId: gameId,
  //       isFramer: true,
  //       character: {
  //         id: 'id',
  //         displayName: 'anne',
  //         imageUrl: 'anne'
  //       }
  //     },
  //     {
  //       id: '5',
  //       userId: '5',
  //       gameId: gameId,
  //       isFramer: true,
  //       character: {
  //         id: 'id',
  //         displayName: 'anne',
  //         imageUrl: 'anne'
  //       }
  //     }
  //   ]
  // }

  // return await Promise.resolve(res)
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
    onSuccess: (data) =>
      setState({
        userList: data,
        isLoading: false
      }),
    refetchOnMount: 'always'
  })

  return state
}
