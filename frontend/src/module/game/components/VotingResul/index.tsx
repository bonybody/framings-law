import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { TextWithShadow } from '@/components/Elements'
import { SubLayout } from '@/components/Layout'
import { useAuthContext } from '@/module/auth'

import { usePostCard } from '../../api/getPostCard'

export const VotingResult = () => {
  const { idToken } = useAuthContext()
  const router = useRouter()
  const gameId = router.query.gameId as string

  const { cardList } = usePostCard({ idToken, gameId, isFlaming: true, isDeleted: false })
  return (
    <SubLayout>
      <Wrap>
        {cardList?.length === 0 ? (
          <TextWithShadow size={'lg'} shadowWidth={7}>
            決着
          </TextWithShadow>
        ) : (
          <TextWithShadow size={'lg'} shadowWidth={7}>
            炎上投稿がまだ
            <br />
            残っています。
          </TextWithShadow>
        )}
      </Wrap>
    </SubLayout>
  )
}
const Wrap = styled.div`
  text-align: center;
  height: 100vh;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
