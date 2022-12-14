import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { Fonts } from '@/styles'

import { mixinDiamond, mixinDiamondWrap } from './mixin'

export type DiamondShapeProps = {
  diagonal: number
  diamondColor: string
  borderColor: string
  borderSize: string
  fontSize: keyof Fonts['sizes']
  children: ReactNode
}

export const DiamondShape = ({
  diagonal,
  diamondColor,
  borderColor,
  borderSize,
  fontSize,
  children
}: DiamondShapeProps) => {
  const shapeDiagonal = `${diagonal / Math.sqrt(2)}px`
  const shapeSide = `${diagonal}px`

  return (
    <ShapeWrap diagonal={shapeSide}>
      <Diamond
        diagonal={shapeDiagonal}
        diamondColor={diamondColor}
        borderColor={borderColor}
        borderSize={borderSize}
      >
        <DiamondContents fontSize={fontSize}>{children}</DiamondContents>
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
  diamondColor: string
  borderSize: string
  borderColor: string
}>`
  ${mixinDiamond}
  ${({ diagonal, diamondColor, borderSize, borderColor }) => css`
    width: ${diagonal};
    height: ${diagonal};
    background: ${diamondColor};
    border: ${borderSize} solid ${borderColor};
    box-sizing: border-box;
  `}
`

const DiamondContents = styled.div<{ fontSize: DiamondShapeProps['fontSize'] }>`
  transform: rotate(-45deg);
  font-size: ${({ theme, fontSize }) => theme.fonts.sizes[fontSize]};
`
