import styled from '@emotion/styled'

import { AllTab, FlamerTab } from './Tab'

export type PostListToggleTabProps = {
  // ユーザーがフレイマーかどうか
  isFlamer: boolean
  // すべて、炎上、どちらを選択しているか
  selectedTab: 'all' | 'flame'
}

export const PostListToggleTab = ({ isFlamer, selectedTab }: PostListToggleTabProps) => {
  return (
    <TabBox>
      <AllTab
        isSelected={true}
        selectedTab={selectedTab}
        isFlamer={isFlamer}
        tabName="すべて"
        icon="url('/card.svg')"
      />
      <FlamerTab
        isSelected={false}
        selectedTab={selectedTab}
        isFlamer={isFlamer}
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
