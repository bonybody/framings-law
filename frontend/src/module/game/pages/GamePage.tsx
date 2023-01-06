/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

import { GamePlayer } from '@/api/@types'
import { apiClient } from '@/lib/api'
import { useAuthContext } from '@/module/auth'

import { Debate } from '../components/Debate'
import { Ready } from '../components/Ready/Ready'
import { Result } from '../components/Result'
import { Totalling } from '../components/Totalling/Totalling'
import { Voting } from '../components/Voting'
import { useProgress } from '../hooks/useProgress'

export const GamePage = () => {
  const router = useRouter()
  const { progress } = useProgress(router.query.gameId as string)
  const { idToken } = useAuthContext()
  const [player, setPlayer] = useState<GamePlayer | undefined>(undefined)

  useEffect(() => {
    void (async () => {
      const me = await apiClient({ idToken })
        .games._gameId_string(router.query.gameId as string)
        .players.me.$get()
      console.log(me)

      setPlayer(me.player)
    })()
  }, [])

  // pusherの状態をkeyにすると良さそう
  const Component = useMemo(
    () => (
      <div>
        {player &&
          {
            ready: <Ready gameId={router.query.gameId as string} />,
            debate: (
              <Debate
                gameId={router.query.gameId as string}
                isFlamer={player.isFramer!}
                timeLimit={(progress?.phaseContent?.timeLimit as unknown as string) ?? ''}
              />
            ),
            vote: <Voting gameId={router.query.gameId as string} isFlamer={player.isFramer!} />,
            totalling: (
              <Totalling
                gameId={router.query.gameId as string}
                deletedCardId={progress?.phaseContent?.deletedCardId}
                end={progress?.phaseContent?.end}
              />
            ),
            result: <Result gameId={router.query.gameId as string} />
          }[progress?.phase ?? 'ready']}
      </div>
    ),
    [progress, player]
  )

  return <>{Component}</>
}
