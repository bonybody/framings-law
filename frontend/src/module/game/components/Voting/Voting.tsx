import styled from '@emotion/styled'
import { useCallback, useState } from 'react'

import { Button, PostListToggleTab, PostListToggleTabProps } from '@/components/Elements'
import { SubLayout } from '@/components/Layout'
import { useAuthContext } from '@/module/auth'

import { postVote } from '../../api/postVote'
import { GameId } from '../../types'
import { PostCardList } from './PostCardList'
import { TimeRemaining } from './TimeRemaining'

export type VotingProps = {
  gameId: GameId
  isFlamer: boolean
}

export const Voting = ({ gameId, isFlamer }: VotingProps) => {
  const { idToken } = useAuthContext()
  const [tab, setTab] = useState<Required<PostListToggleTabProps['selectedTab']>>('all')
  const [cardId, setCardId] = useState<string | null>(null)

  const handleTab: PostListToggleTabProps['handleTab'] = useCallback((selectedTab) => {
    if (!isFlamer) return
    setTab(selectedTab)
  }, [])

  const handleCardId = useCallback((id: string) => {
    setCardId((prev) => (prev === id ? null : id))
  }, [])

  const votingAction = useCallback(async () => {
    console.log(cardId)
    if (cardId === null) return
    await postVote({ idToken, gameId, cardId })
  }, [])

  return (
    <SubLayout>
      <Container>
        <TimeRemaining />
        <TabContainer>
          <PostListToggleTab isFlamer={isFlamer} selectedTab={tab} handleTab={handleTab} />
        </TabContainer>

        <PostCardList
          gameId={gameId}
          isFlamer={isFlamer}
          selectedTab={tab}
          cardId={cardId}
          handleCardId={handleCardId}
        />
        <ButtonContainer>
          <Button isDisable={cardId === null} onClick={votingAction}>
            これに決める
          </Button>
        </ButtonContainer>
      </Container>
    </SubLayout>
  )
}

const Container = styled.div`
  padding: 0 16px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const TabContainer = styled.div`
  padding-top: 3vh;
`

const ButtonContainer = styled.div`
  margin: auto auto 0 auto;
  padding: 24px 0 16px 0;
`
