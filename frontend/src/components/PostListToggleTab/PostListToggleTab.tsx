import styled from '@emotion/styled'

import { Tab } from './Tab'

export type PostListToggleTabProps = {
  //
}

export const PostListToggleTab = ({}: PostListToggleTabProps) => {
  return (
    <TabBox>
      <Tab />
      <Tab />
    </TabBox>
  )
}

// Tabの親
const TabBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
