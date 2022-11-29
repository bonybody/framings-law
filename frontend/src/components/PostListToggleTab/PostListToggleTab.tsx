import styled from '@emotion/styled'

import { Tab } from './Tab'

export type PostListToggleTabProps = {
  // "すべて"がactiveか
  isActiveAll: boolean
  // "炎上"がactiveか
  isActiveFlame: boolean
  // "すべて"が選択されているか
  isSelectAll: boolean
  // "炎上"が選択されているか
  isSelectFlame: boolean
}

export const PostListToggleTab = ({
  isActiveAll,
  isActiveFlame,
  isSelectAll,
  isSelectFlame
}: PostListToggleTabProps) => {
  // const [ddd, handlClick] = useState("")
  return (
    <TabBox>
      <Tab
        isSelect={isSelectAll}
        isActive={isActiveAll}
        tabName="すべて"
        icon="url('/cards.png')"
      />
      <Tab
        isSelect={isSelectFlame}
        isActive={isActiveFlame}
        tabName="炎上"
        icon="url('/fire.png')"
      />
    </TabBox>
  )
}

// Tabの親
const TabBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
