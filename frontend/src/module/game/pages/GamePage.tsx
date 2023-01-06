import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { Debate } from '../components/Debate'
import { Voting } from '../components/Voting'

export const GamePage = () => {
  const router = useRouter()

  // pusherの状態をkeyにすると良さそう
  const Component = useMemo(
    () =>
      ({
        debate: <Debate gameId={router.query.gameId as string} isFlamer={true} />,
        voting: <Voting gameId={router.query.gameId as string} isFlamer={true} />
      }['debate']),
    []
  )

  return <>{Component}</>
}
