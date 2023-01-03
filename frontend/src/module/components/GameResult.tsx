import styled from '@emotion/styled'
import { useState } from 'react'

import { Button, PostListToggleTab, PostListToggleTabProps } from '@/components/Elements'
import { SubLayout } from '@/components/Layout'

import { PostCardList } from '../game/components/Debate/PostCardList'
import { TimeRemaining } from '../game/components/Debate/TimeRemaining'

export type GameResultProps = {
  gameId: string | number
  // フレイマーかどうか
  isFlamer: boolean
}

// ゲームリザルト画面

export const GameResult = ({ gameId, isFlamer }: GameResultProps) => {
  const [tab, setTab] = useState<Required<PostListToggleTabProps['selectedTab']>>('all')

  const handleTab: PostListToggleTabProps['handleTab'] = (selectedTab) => {
    if (!isFlamer) return
    setTab(selectedTab)
  }

  return (
    <SubLayout>
      <Container>
        <TimeRemaining />
        <TabContainer>
          <PostListToggleTab isFlamer={isFlamer} selectedTab={tab} handleTab={handleTab} />
        </TabContainer>
        <CardBox>
          <PostCardList gameId={gameId} isFlamer={isFlamer} />
        </CardBox>
        <ButtonBox>
          <Button isActive={false} isDisable={false}>
            これに決める
          </Button>
        </ButtonBox>
      </Container>
    </SubLayout>
  )
}

// 隙間
const Container = styled.div`
  padding: 0 16px;
`

// タブ位置
const TabContainer = styled.div`
  padding-top: 3vh;
`

// カード位置
const CardBox = styled.div`
  height: 55vh;
  display: flex;
  flex-flow: column;
  padding-top: 23px;
  justify-content: space-between;
`

// これに決めるボタン位置
const ButtonBox = styled.div`
  width: fit-content;
  position: absolute;
  bottom: 9vh;
  left: 0;
  right: 0;
  margin: auto;
`
