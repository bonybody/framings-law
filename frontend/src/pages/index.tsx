import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'

// import { Button, DiamondShape, PostCard } from '@/components'

// ホーム画面

const Home: NextPage = () => {
  return (
    <Main>
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
    </Main>
  )
}

export default Home

// 大枠
const Main = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

// ロゴ
const Logo = styled.img`
  position: absolute;
  width: 46px;
  height: 46px;
  top: 55px;
  left: 314px;
`

// アンネ
const Anne = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 55px;
`

// タイトルロゴ
const Title = styled.img`
  position: absolute;
  width: 331px;
  height: 155px;
  left: 29px;
  top: 221px;
`

// スタートボタン
const StartButton = styled.a`
  display: block;
  position: absolute;
  text-align: center;
  width: 215px;
  height: 24px;
  left: 87px;
  top: 602px;
  background-color: transparent;
  text-decoration: none;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  color: ${(props) => props.theme.colors.white};
  -webkit-text-stroke: 3px ${(props) => props.theme.colors.border.black};
`

// background-color: ${(props) => props.theme.colors.background.right};

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
