import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { InputField } from '@/components/Form'
import { useAuthContext } from '@/module/auth'
import { theme } from '@/styles'

import { getJoinRoom } from '../../api/getJoinRoom'
import { StartRoom } from './StartRoom'

export const JoinRoom = () => {
  const { idToken } = useAuthContext()
  const { register, getValues } = useForm<{ roomKey: string }>()
  const router = useRouter()

  const handleClick = async () => {
    const res = await getJoinRoom(idToken, getValues('roomKey'))
    if (!res) return console.error('failed join')
    await router.push(`/room/${getValues('roomKey')}`)
  }

  return (
    <JoinRoomArea>
      <StartRoom
        text={'ルームへの参加'}
        buttonText={'参加する！！'}
        roomType={'join'}
        onClick={handleClick}
      >
        <InputArea>
          <InputField
            label="ルームキー"
            register={register('roomKey')}
            backgroundColor={theme.colors.secondary.dark}
          ></InputField>
        </InputArea>
      </StartRoom>
    </JoinRoomArea>
  )
}

const JoinRoomArea = styled.div`
  &::after {
    content: '';
    display: inline-block;
    background: url('/join-room.svg') no-repeat;
    width: 41.6%;
    aspect-ratio: 162.48/214.2;
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
`
