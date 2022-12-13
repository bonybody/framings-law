import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { mixinDiamond,mixinDiamondWrap } from '../DiamondShape/mixin'

export type WaitingDiamondShapeProps = {
  diagonal: number
  fontSize: string
  children: ReactNode
}

export const WaitingDiamondShape = ({ diagonal, fontSize, children }: WaitingDiamondShapeProps) => {
  const shapeDiagonal = `${diagonal / Math.sqrt(2)}px`
  const shapeSide = `${diagonal}px`
  return (
    <ShapeWrap diagonal={shapeSide}>
      <Diamond diagonal={shapeDiagonal}>
        <DiamondContents fontSize={fontSize}>{children}</DiamondContents>
      </Diamond>
    </ShapeWrap>
  )
}

const ShapeWrap = styled.div<{ diagonal: string }>`
  ${mixinDiamondWrap}
  width: ${(props) => props.diagonal};
  height: ${(props) => props.diagonal};
`

const Diamond = styled.div<{
  diagonal: string
}>`
  ${mixinDiamond}
  box-sizing: border-box;
  background: #df114f;
  box-shadow: inset 6px 6px 6px 0px rgba(0, 0, 0, 0.25);
  width: ${(props) => props.diagonal};
  height: ${(props) => props.diagonal};
`

const DiamondContents = styled.div<{ fontSize: string }>`
  transform: rotate(-45deg);
  font-size: ${(props) => props.fontSize};
  color: #ffffff;
`
