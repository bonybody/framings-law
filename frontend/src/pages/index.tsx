import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'

// ホーム画面

const Home: NextPage = () => {
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
