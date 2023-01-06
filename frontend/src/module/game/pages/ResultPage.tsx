import { useRouter } from 'next/router'

import { Result } from '../components/Result'

export const ResultPage = () => {
  const router = useRouter()

  return <Result gameId={router.query.gameId as string} />
}
