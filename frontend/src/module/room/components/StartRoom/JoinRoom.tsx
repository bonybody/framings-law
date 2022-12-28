import styled from '@emotion/styled'

import { InputField } from '@/components/Form'

import { StartRoom } from './StartRoom'

export const JoinRoom = () => {
  return (
    <StartRoom text={'ルームの作成'} buttonText={'作成！'} roomType={'create'}>
      <InputArea>
        <InputField label="" register={} backgroundColor={}></InputField>
        <InputField label="" register={} backgroundColor={}></InputField>
        <InputField label="" register={} backgroundColor={}></InputField>
      </InputArea>
    </StartRoom>
  )
}

const InputArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 20px;
`
