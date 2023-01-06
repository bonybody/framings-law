import styled from '@emotion/styled'
import { useState } from 'react'

import { PostListToggleTab, PostListToggleTabProps } from '@/components/Elements'
import { MainLayout } from '@/components/Layout'

import { GameId } from '../../types'
import { PostCardList } from './PostCardList'
import { TimeRemaining } from './TimeRemaining'
import { UserList } from './UserList'

export type DebateProps = {
  gameId: GameId
  isFlamer: boolean
}

export const Debate = ({ gameId, isFlamer }: DebateProps) => {
  const [tab, setTab] = useState<Required<PostListToggleTabProps['selectedTab']>>('all')

  const handleTab: PostListToggleTabProps['handleTab'] = (selectedTab) => {
    if (!isFlamer) return
    setTab(selectedTab)
  }

  return (
    <MainLayout>
      <Container>
        <TimeRemaining />
        <TabContainer>
          <PostListToggleTab isFlamer={isFlamer} selectedTab={tab} handleTab={handleTab} />
        </TabContainer>

        <PostCardList gameId={gameId} isFlamer={isFlamer} selectedTab={tab} />
        <UserListContainer>
          <UserList gameId={gameId} />
        </UserListContainer>
      </Container>
    </MainLayout>
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

const UserListContainer = styled.div`
  margin-top: auto;
  padding: 24px 0 16px 0;
`
