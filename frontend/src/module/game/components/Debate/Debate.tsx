import styled from '@emotion/styled'
import { useState } from 'react'

import { PostListToggleTab, PostListToggleTabProps } from '@/components/Elements'
import { MainLayout } from '@/components/Layout'

import { PostCardList } from './PostCardList'
import { TimeRemaining } from './TimeRemaining'

export type DebateProps = {
  gameId: string | number
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

        <PostCardList gameId={gameId} isFlamer={isFlamer} />
      </Container>
    </MainLayout>
  )
}

const Container = styled.div`
  padding: 0 16px;
`

const TabContainer = styled.div`
  padding-top: 3vh;
`
