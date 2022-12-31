import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { ReactNode } from 'react'

import { Button, DiamondShape } from '@/components/Elements'

export type StartRoomProps = {
  text: string
  children: ReactNode
  buttonText: string
  roomType: 'create' | 'join'
}

export const StartRoom = ({ text, children, buttonText, roomType }: StartRoomProps) => {
  return (
    <Wrap roomType={roomType}>
      <RoomHead>{text}</RoomHead>

      <DiamondShape
        diagonal={220}
        diamondColor={'#D9D9D9'}
        borderColor={'#2B2B2B'}
        borderSize={'10px'}
        fontSize={'xxxl'}
      >
        <span>?</span>
      </DiamondShape>

      <InputArea>{children}</InputArea>
      <ButtonArea>
        <Button>{buttonText}</Button>
      </ButtonArea>
    </Wrap>
  )
}

const Wrap = styled.div<{ roomType: StartRoomProps['roomType'] }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;

  ${({ theme, roomType }) => {
    switch (roomType) {
      case 'create':
        return css`
          background-color: ${theme.colors.primary.main};
        `
      case 'join':
        return css`
          background-color: ${theme.colors.secondary.main};
        `
    }
  }}
`

const RoomHead = styled.h2`
  margin: 36px 16px 36px auto;
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.white};
  `};
`

const InputArea = styled.div`
  min-height: 194px;
  margin: 30px 0 87px 0;
`

const ButtonArea = styled.div`
  z-index: 999;
`
