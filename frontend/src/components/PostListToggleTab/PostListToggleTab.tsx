import styled from '@emotion/styled'

import { AllTab, FlamerTab } from './Tab'

export type PostListToggleTabProps = {
  // ユーザーがフレイマーかどうか
  isFlamer: boolean
  // すべて、炎上、どちらを選択しているか
  selectedTab: 'all' | 'frame'
}

export const PostListToggleTab = ({ isFlamer, selectedTab }: PostListToggleTabProps) => {
  return (
    <TabBox>
      <AllTab
        // selectedTab={selectedTab}
        selectedTab="all"
        // isFlamer={isFlamer}
        isFlamer={false}
        tabName="すべて"
        icon="url('/card.svg')"
      />
      <FlamerTab
        // selectedTab={selectedTab}
        selectedTab="frame"
        // isFlamer={isFlamer}
        isFlamer={false}
        tabName="炎上"
        icon="url('/fire.svg')"
      />
    </TabBox>
  )
}

// Tabの親
const TabBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
`
