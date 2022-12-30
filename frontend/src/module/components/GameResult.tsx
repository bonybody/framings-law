import styled from '@emotion/styled'

import { Button, PostCard, PostListToggleTab } from '@/components/Elements'
import { SubLayout } from '@/components/Layout'

export type GameResultProps = {
  //
}

// ゲームリザルト画面

export const GameResult = ({}: GameResultProps) => {
  return (
    <SubLayout>
      <Main>
        <Timelimit>残り015秒</Timelimit>
        <TabBox>
          <PostListToggleTab isFlamer={false} selectedTab={'all'} handleTab={} />
        </TabBox>
        <CardBox>
          <PostCard
            postedDate="8月20日"
            age="25"
            gender="男"
            content="あああ"
            isSelect={true}
            isFlamePost={false}
          />
          <PostCard
            postedDate="8月20日"
            age="25"
            gender="男"
            content="あああ"
            isSelect={true}
            isFlamePost={false}
          />
          <PostCard
            postedDate="8月20日"
            age="25"
            gender="男"
            content="あああ"
            isSelect={true}
            isFlamePost={false}
          />
        </CardBox>
        <ButtonBox>
          <Button isActive isDisable>
            これに決める
          </Button>
        </ButtonBox>
      </Main>
    </SubLayout>
  )
}

// 隙間
const Main = styled.div`
  margin: 0 15px;
`

// 秒数
const Timelimit = styled.div`
  width: 101px;
  margin: auto;
  position: absolute;
  top: 51px;
  left: 0;
  right: 0;
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  text-shadow: 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b;
`

// タブ位置
const TabBox = styled.div`
  padding-top: 116px;
`

// カード位置
const CardBox = styled.div`
  height: 462px;
  display: flex;
  flex-flow: column;
  padding-top: 23px;
  justify-content: space-between;
`

// これに決めるボタン位置
const ButtonBox = styled.div`
  width: fit-content;
  position: absolute;
  bottom: 77px;
  left: 0;
  right: 0;
  margin: auto;
`
