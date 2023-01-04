import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'

import { InputField } from '@/components/Form'
import { theme } from '@/styles'

import { StartRoom } from './StartRoom'

export const CreateRoom = () => {
  const { register } = useForm()
  return (
    <CreateRoomArea>
      <StartRoom
        text={'ルームの作成'}
        buttonText={'作成！'}
        roomType={'create'}
        onClick={() => {
          console.log('Create')
        }}
      >
        <InputArea>
          <InputField
            label="投稿カード枚数"
            register={register('postCard')}
            backgroundColor={theme.colors.primary.dark}
          ></InputField>
          <InputField
            label="ディベート分数"
            register={register('debateMinute')}
            backgroundColor={theme.colors.primary.dark}
          ></InputField>
          <InputField
            label="参加できる人数"
            register={register('numberOfParticipants')}
            backgroundColor={theme.colors.primary.dark}
          ></InputField>
        </InputArea>
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
