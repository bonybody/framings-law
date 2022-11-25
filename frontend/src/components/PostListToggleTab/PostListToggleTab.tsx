import styled from '@emotion/styled'

import { Tab } from './Tab'

export type PostListToggleTabProps = {
  //
}

export const PostListToggleTab = ({}: PostListToggleTabProps) => {
  return (
    <TabBox>
      <Tab isSelect={true} isActive={false} tabName="すべて" icon="url('/cards.png')" />
      <Tab isSelect={false} isActive={false} tabName="炎上" icon="url('/fire.png')" />
    </TabBox>
  )
}

// Tabの親
const TabBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
