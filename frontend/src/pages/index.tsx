import { keyframes, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'

// ホーム画面
import {
  Button,
  CharacterDiamondShape,
  DiamondShape,
  PostCard,
  WaitingDiamondShape
} from '@/components/Elements'
import { InputField } from '@/components/Form'
import { MainLayout } from '@/components/Layout'

const Home: NextPage = () => {
  const { register } = useForm()
  const theme = useTheme()
  return (
    <div>
      <Container>
        <Anne />
        <Logo src="/question.svg" alt="logo" />
        <Title src="/titleLogo.svg" alt="title" />
        <CreateRoomButton>
          <CreateRoomText>Create room</CreateRoomText>
        </CreateRoomButton>
        <JoinTheRoomButton>
          <JoinThehRoomText>Join the room</JoinThehRoomText>
        </JoinTheRoomButton>
      </Container>
      <MainLayout>
        {/* <SubLayout> */}
        <Main>
          <Headline2>Button</Headline2>
          <div>
            <Button>Button</Button>
          </div>
          <div>
            <Button isActive>Button(Active)</Button>
          </div>
          <div>
            <Button isDisable>Button(Disabled)</Button>
          </div>
          <div>
            <Button isActive isDisable>
              Button(Active&Disabled)
            </Button>
          </div>
          <Headline2>PostCard</Headline2>
          <div>
            <PostCard
              postedDate={'2022年11月30日'}
              age={'20'}
              gender={'男'}
              content={'テキストが入ります'}
              isSelect={true}
              isFlamePost={false}
            ></PostCard>
          </div>
          <div>
            <PostCard
              postedDate={'2022年11月30日'}
              age={'20'}
              gender={'男'}
              content={'テキストが入ります'}
              isSelect={true}
              isFlamePost={true}
            ></PostCard>
          </div>
          <div>
            <PostCard
              postedDate={'2022年11月30日'}
              age={'20'}
              gender={'男'}
              content={'テキストが入ります'}
              isSelect={false}
              isFlamePost={false}
            ></PostCard>
          </div>
          <div>
            <PostCard
              postedDate={'2022年11月30日'}
              age={'20'}
              gender={'男'}
              content={'テキストが入ります'}
              isSelect={false}
              isFlamePost={true}
            ></PostCard>
          </div>
          <Headline2>Input Field</Headline2>
          <div>
            <InputField
              label="ルーム"
              register={register('room')}
              placeholder="room"
              backgroundColor={theme.colors.primary.dark}
            />
          </div>
          <div>
            <InputField
              label="ニックネーム"
              register={register('nickname')}
              placeholder="nickname"
              backgroundColor={theme.colors.secondary.dark}
            />
          </div>
          <Headline2>DiamondShape</Headline2>
          <div>
            <DiamondShape
              diagonal={200}
              diamondColor="green"
              borderColor="red"
              borderSize="5px"
              fontSize="xs"
            >
              aaaaa
            </DiamondShape>
            <DiamondShape
              diagonal={200}
              diamondColor="#D9D9D9"
              borderColor="#2B2B2B"
              borderSize="10px"
              fontSize="xs"
            >
              ?
            </DiamondShape>
            <WaitingDiamondShape
              diagonal={200}
              fontSize="xs"
              isJoining={true}
            ></WaitingDiamondShape>
            <CharacterDiamondShape
              borderSize="8px"
              diagonal={200}
              fontSize="xs"
              isMyDiamond={false}
              isReady={false}
              charactorName="anne"
            />
          </div>
        </Main>
        {/* </SubLayout> */}
      </MainLayout>
    </div>
  )
}

export default Home

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`

// ?マーク
const Logo = styled.img`
  position: absolute;
  width: 49.5px;
  height: 49.5px;
  top: 4.5vh;
  right: 6.5vw;
`

// アンネ
const Anne = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/anneBack.svg');
  background-position: top calc(-30px - 10%) right 30%;
  background-size: calc(1px + 110%) calc(1px + 100%);
  background-repeat: no-repeat;
`

// ボタン点滅
const Flashing = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`

// タイトルロゴ
const Title = styled.img`
  position: relative;
  display: block;
  width: 85vw;
  height: 18.5vh;
  margin: 0 auto;
  top: 148px;

  //アニメーション
  animation: ${Flashing} 2s linear infinite;
`

// Create roomボタン
const CreateRoomButton = styled.button`
  display: block;
  position: relative;
  width: 240px;
  height: 60px;
  top: 43.3vh;
  margin: 0 auto;
  box-sizing: border-box;
  border: 5px solid ${(props) => props.theme.colors.border.black};
  background-color: ${(props) => props.theme.colors.primary.main};

  // 画像
  &::before {
    display: inline-block;
    width: 58.79px;
    aspect-ratio: 16/9.5;
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background-image: url('/createRoom.svg');
    background-size: cover;
  }
`

// Join the roomボタン
const JoinTheRoomButton = styled(CreateRoomButton)`
  top: 46.3vh;
  background-color: ${(props) => props.theme.colors.secondary.main};

  // 画像
  &::before {
    width: 33px;
    height: 46px;
    right: 10px;
    background-image: url('/joinTheRoom.svg');
  }
`

// Create roomボタン内テキスト
const CreateRoomText = styled.p`
  display: block;
  margin: auto;
  position: absolute;
  top: 55%;
  left: 26px;
  transform: translateY(-50%);
  width: 160px;
  font-family: ${(props) => props.theme.fonts.fontFamily.sub};
  font-weight: bold;
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  text-shadow: 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b;
  z-index: 2;
`

// Join the roomボタン内テキスト
const JoinThehRoomText = styled(CreateRoomText)`
  width: 180px;
`

const Headline2 = styled.h2`
  margin: 0;
  padding: 16px 0;
`

const Main = styled.div`
  //
`

// const Headline2 = styled.h2`
//   margin: 0;
//   padding: 16px 0;
// `
