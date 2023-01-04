import { useRouter } from 'next/router'

import { Debate } from '../components/Debate'

export const DebatePage = () => {
  const router = useRouter()

  return <Debate gameId={router.query.gameId as string} isFlamer={true} />
}
