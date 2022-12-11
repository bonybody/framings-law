import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'

// import { Button, DiamondShape, PostCard } from '@/components'

// ホーム画面

const Home: NextPage = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #d2104a;
          }
        `}
      />
      <Anne src="/anne.svg" alt="anne" />
      <Logo src="/logo.svg" alt="logo" />
      <Title src="/titleLogo.svg" alt="title" />
      <StartButton>Tap to start game</StartButton>
    </>
  )
}

export default Home

// ロゴ
const Logo = styled.img`
  position: absolute;
  width: 12.5vw;
  height: 12.5vw;
  top: 6.5vh;
  right: 6.5vw;
`

// アンネ
const Anne = styled.img`
  position: absolute;
  width: 100%;
  height: 95%;
  top: 6.5vh;
`

// タイトルロゴ
const Title = styled.img`
  position: relative;
  display: block;
  width: 85vw;
  height: 18.5vh;
  margin: 0 auto;
  top: 26vh;
`

// スタートボタン
const StartButton = styled.a`
  display: block;
  position: relative;
  text-align: center;
  width: 57.8vw;
  height: 3vh;
  margin: 0 auto;
  top: 55vh;
  background-color: transparent;
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.subFont};
  font-weight: 900;
  font-style: normal;
  font-size: 1.5rem;
  line-height: 29px;
  color: ${(props) => props.theme.colors.white};
  text-shadow: 3px 0 0 #2b2b2b, -3px 0 0 #2b2b2b, 0 -3px 0 #2b2b2b, 0 3px 0 #2b2b2b,
    3px 3px 0 #2b2b2b, -3px -3px 0 #2b2b2b, -3px 3px 0 #2b2b2b, 3px -3px 0 #2b2b2b;
`

// background-color: ${(props) => props.theme.colors.background.right};

// font-family: ${(props) => props.theme.fonts.subFont};
// font-weight: 900;
// font-family: ${(props) => props.theme.fonts.subFont};
// -webkit-text-stroke: 3px ${(props) => props.theme.colors.border.black};

// const Parts: NextPage = () => {
//   return (
//     <Main>
//       <h1>Button</h1>
//       <div>
//         <Button>Button</Button>
//       </div>
//       <div>
//         <Button isActive>Button(Active)</Button>
//       </div>
//       <div>
//         <Button isDisable>Button(Disabled)</Button>
//       </div>
//       <div>
//         <Button isActive isDisable>
//           Button(Active&Disabled)
//         </Button>
//       </div>
//       <h1>PostCard</h1>
//       <div>
//         <PostCard
//           postedDate={'2022年11月30日'}
//           age={'20'}
//           gender={'男'}
//           content={'テキストが入ります'}
//           isSelect={true}
//           isFlamePost={false}
//         ></PostCard>
//       </div>
//       <div>
//         <PostCard
//           postedDate={'2022年11月30日'}
//           age={'20'}
//           gender={'男'}
//           content={'テキストが入ります'}
//           isSelect={true}
//           isFlamePost={true}
//         ></PostCard>
//       </div>
//       <div>
//         <PostCard
//           postedDate={'2022年11月30日'}
//           age={'20'}
//           gender={'男'}
//           content={'テキストが入ります'}
//           isSelect={false}
//           isFlamePost={false}
//         ></PostCard>
//       </div>
//       <div>
//         <PostCard
//           postedDate={'2022年11月30日'}
//           age={'20'}
//           gender={'男'}
//           content={'テキストが入ります'}
//           isSelect={false}
//           isFlamePost={true}
//         ></PostCard>
//       </div>
//       <h1>DiamondShape</h1>
//       <div style={{ display: 'flex' }}>
//         <DiamondShape
//           diagonal={200}
//           diamondColor="green"
//           borderColor="red"
//           borderSize="5px"
//           fontSize="20px"
//         >
//           aaaaa
//         </DiamondShape>
//         <DiamondShape
//           diagonal={200}
//           diamondColor="#D9D9D9"
//           borderColor="#2B2B2B"
//           borderSize="10px"
//           fontSize="40px"
//         >
//           ?
//         </DiamondShape>
//       </div>
//     </Main>
//   )
// }
