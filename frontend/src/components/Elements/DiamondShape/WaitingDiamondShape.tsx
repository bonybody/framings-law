import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Fonts } from '@/styles'

import { mixinDiamond, mixinDiamondWrap } from '../DiamondShape/mixin'

export type WaitingDiamondShapeProps = {
  diagonal: number
  fontSize: keyof Fonts['sizes']
  isJoining: boolean
}

export const WaitingDiamondShape = ({
  diagonal,
  fontSize,
  isJoining
}: WaitingDiamondShapeProps) => {
  const shapeDiagonal = `${diagonal / Math.sqrt(2)}px`
  const shapeSide = `${diagonal}px`
  return (
    <ShapeWrap diagonal={shapeSide}>
      <Diamond diagonal={shapeDiagonal}>
        <DiamondContents fontSize={fontSize}>
          {isJoining ? 'joining...' : 'no player'}
        </DiamondContents>
      </Diamond>
    </ShapeWrap>
  )
}

const ShapeWrap = styled.div<{ diagonal: string }>`
  ${mixinDiamondWrap}
  ${({ diagonal }) => css`
    width: ${diagonal};
    height: ${diagonal};
  `}
`

const Diamond = styled.div<{
  diagonal: string
}>`
  ${mixinDiamond}
  box-sizing: border-box;
  background: #df114f;
  box-shadow: inset 6px 6px 6px 0px rgba(0, 0, 0, 0.25);
  ${({ diagonal }) => css`
    width: ${diagonal};
    height: ${diagonal};
  `}
`

const DiamondContents = styled.div<{ fontSize: WaitingDiamondShapeProps['fontSize'] }>`
  transform: rotate(-45deg);
  font-size: ${({ theme, fontSize }) => theme.fonts.sizes[fontSize]};
  color: #ffffff;
`
