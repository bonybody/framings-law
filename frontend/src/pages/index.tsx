import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'

import {
  Button,
  CharacterDiamondShape,
  DiamondShape,
  PostCard,
  WaitingDiamondShape
} from '@/components/Elements'
import { InputField } from '@/components/Form'

const Home: NextPage = () => {
  const { register } = useForm()
  const theme = useTheme()
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
      <h1>Input Field</h1>
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
      <h1>DiamondShape</h1>
      <div style={{ display: 'flex' }}>
        <DiamondShape
          diagonal={100}
          diamondColor="green"
          borderColor="red"
          borderSize="8px"
          fontSize="xs"
        >
          aaaaa
        </DiamondShape>
        <br />
        <DiamondShape
          diagonal={100}
          diamondColor="#D9D9D9"
          borderColor="#2B2B2B"
          borderSize="8px"
          fontSize="xs"
        >
          ?
        </DiamondShape>
        <WaitingDiamondShape diagonal={200} fontSize="xs" isJoining={true}></WaitingDiamondShape>
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
  )
}

export default Home

const Main = styled.div`
  max-width: 700px;
  margin: 0 auto;
`
