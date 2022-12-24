import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'

// ホーム画面

const Home: NextPage = () => {
  return (
    <Container>
      <Anne />
      <Logo src="/question.svg" alt="logo" />
      <Title src="/titleLogo.svg" alt="title" />
      <CreateRoomButton>
        <Text>Create room</Text>
      </CreateRoomButton>
    </Container>
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
  /* aspect-ratio: 9/20; */
  /* top: 6.5vh; */
  background-image: url('/anne.svg');
  background-position: top calc(-40px - 10%) right 30%;
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
  min-height: 60px;
  width: 61.6vw;
  height: 7.1vh;
  top: 42.7vh;
  margin: 0 auto;
  box-sizing: border-box;
  border: 5px solid ${(props) => props.theme.colors.border.black};
  background-color: ${(props) => props.theme.colors.primary.main};

  // 画像
  &::before {
    display: inline-block;
    width: 25%;
    aspect-ratio: 16/9.5;
    content: '';
    position: absolute;
    top: 15%;
    right: 4%;
    background-image: url('/createRoom.svg');
    background-size: cover;
  }
`

// ボタン内テキスト
const Text = styled.p`
  display: block;
  margin: auto;
  position: absolute;
  top: 55%;
  left: 20px;
  transform: translateY(-50%);
  width: 160px;
  font-family: ${(props) => props.theme.fonts.fonts.sub};
  font-weight: bold;
  font-size: ${(props) => props.theme.fonts.sizes.body2};
  color: ${(props) => props.theme.colors.white};
  text-shadow: 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b;
  z-index: 2;
`
