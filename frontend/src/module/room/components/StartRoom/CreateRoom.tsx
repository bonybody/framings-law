import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { useAuthContext } from '@/module/auth'

import { getCreateRoom } from '../../api/getCreateRoom'
import { StartRoom } from './StartRoom'

export const CreateRoom = () => {
  const { idToken } = useAuthContext()
  const router = useRouter()

  const handleClick = async () => {
    const res = await getCreateRoom(idToken)
    if (!res.id) return console.error('not found created room id')
    await router.push(`/room/${res.id}`)
  }

  return (
    <CreateRoomArea>
      <StartRoom
        text={'ルームの作成'}
        buttonText={'作成！'}
        roomType={'create'}
        onClick={handleClick}
      >
        <InputArea />
      </StartRoom>
    </CreateRoomArea>
  )
}

const CreateRoomArea = styled.div`
  &::after {
    content: '';
    display: inline-block;
    background: url('/create-room.svg') no-repeat;
    width: 90%;
    aspect-ratio: 350/253;
    position: absolute;
    background-size: contain;
    bottom: 0;
    right: 0;
    z-index: 0;
    margin: 0 16px 16px 0;
  }
`

const InputArea = styled.div`
  width: 256px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 20px;
`
