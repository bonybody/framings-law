import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { InputField } from '@/components/Form'
import { firebaseAuth } from '@/lib/firebase'
import { theme } from '@/styles'

import { getJoinRoom } from '../../api/getJoinRoom'
import { StartRoom } from './StartRoom'

export const JoinRoom = () => {
  const { register, getValues } = useForm<{ roomKey: string }>()

  const [idToken, setIdToken] = useState<string>('')

  useEffect(() => {
    firebaseAuth.currentUser
      ?.getIdToken()
      .then((res) => {
        setIdToken(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleClick = async () => {
    await getJoinRoom(idToken, getValues('roomKey'))
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
