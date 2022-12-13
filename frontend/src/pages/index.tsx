import styled from '@emotion/styled'
import type { NextPage } from 'next'

import { Button, DiamondShape, PostCard, WaitingDiamondShape } from '@/components'

const Home: NextPage = () => {
  return (
    <Main>
      <h1>Button</h1>
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
      <h1>PostCard</h1>
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
      <h1>DiamondShape</h1>
      <div style={{ display: 'flex' }}>
        <DiamondShape
          diagonal={200}
          diamondColor="green"
          borderColor="red"
          borderSize="5px"
          fontSize="20px"
        >
          aaaaa
        </DiamondShape>
        <DiamondShape
          diagonal={200}
          diamondColor="#D9D9D9"
          borderColor="#2B2B2B"
          borderSize="10px"
          fontSize="40px"
        >
          ?
        </DiamondShape>
        <WaitingDiamondShape diagonal={200} fontSize="14px">
          Loading...
        </WaitingDiamondShape>
      </div>
    </Main>
  )
}

export default Home

const Main = styled.div`
  max-width: 700px;
  margin: 0 auto;
`
