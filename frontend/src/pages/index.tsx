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
      <StartButton>Tap to start game</StartButton>
    </Container>
  )
}

export default Home

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`

// ロゴ
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
  /* background-position: top calc(10px + 52%) right 50%; */
  /* background-size: calc(1px + 105%) calc(1px + 110%); */
  background-repeat: no-repeat;
`

// タイトルロゴ
const Title = styled.img`
  position: relative;
  display: block;
  width: 85vw;
  height: 18.5vh;
  margin: 0 auto;
  top: 148px;
  // 26vh
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

// スタートボタン
const StartButton = styled.a`
  display: block;
  position: relative;
  text-align: center;
  top: 55vh;
  font-family: ${(props) => props.theme.fonts.fonts.sub};
  font-weight: bold;
  font-size: ${(props) => props.theme.fonts.sizes.body2};
  color: ${(props) => props.theme.colors.white};
  text-shadow: 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b, 0 0 3px #2b2b2b,
    0 0 3px #2b2b2b;

  //アニメーション
  animation: ${Flashing} 2s linear infinite;
`
