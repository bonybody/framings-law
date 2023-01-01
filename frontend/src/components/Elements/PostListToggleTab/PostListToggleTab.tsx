import styled from '@emotion/styled'

import { AllTab, FlamerTab, TabProps } from './Tab'

export type PostListToggleTabProps = {
  // ユーザーがフレイマーかどうか
  isFlamer?: boolean
  // すべて、炎上、どちらを選択しているか
  selectedTab?: TabProps['selectedTab']
  // クリック
  handleTab: TabProps['handleTab']
}

export const PostListToggleTab = ({
  isFlamer = false,
  selectedTab = 'all',
  handleTab
}: PostListToggleTabProps) => {
  return (
    <TabBox>
      <AllTab selectedTab={selectedTab} handleTab={handleTab} />
      <FlamerTab selectedTab={selectedTab} isFlamer={isFlamer} handleTab={handleTab} />
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
