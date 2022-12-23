import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Fonts, theme } from '@/styles'

import { mixinDiamondWrap } from './mixin'

export type CharacterDiamondShapeProps = {
  diagonal: number
  diamondColor: string
  borderSize: string
  fontSize: keyof Fonts['sizes']
  isMyDiamond: boolean
  isReady: boolean
  charactorName: string
}

export const CharacterDiamondShape = ({
  diagonal,
  diamondColor,
  borderSize,
  fontSize,
  isMyDiamond,
  isReady,
  charactorName
}: CharacterDiamondShapeProps) => {
  const shapeDiagonal = `${diagonal / Math.sqrt(2)}px`
  const shapeSide = `${diagonal}px`

  return (
    <div>
      <ShapeWrap diagonal={shapeSide}>
        <Diamond
          diagonal={shapeDiagonal}
          diamondColor={diamondColor}
          borderSize={borderSize}
          isMyDiamond={isMyDiamond}
          isReady={isReady}
        >
          <DiamondInnerContainer>
            <DiamondContents fontSize={fontSize} charactorName={charactorName}>
              <img src={'/fire.png'} width="100%" height="auto" />
            </DiamondContents>
          </DiamondInnerContainer>
          <DiamondText>aaaaaa</DiamondText>
        </Diamond>
      </ShapeWrap>
    </div>
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
  isMyDiamond: boolean
  isReady: boolean
}>`
  position: relative;
  ${mixinDiamondWrap}
  ${({ diagonal, diamondColor, borderSize, isMyDiamond, isReady }) => css`
    width: ${diagonal};
    height: ${diagonal};
    border: ${borderSize} solid ${isMyDiamond ? '#FF8A00' : '#FFFFFF'};
    background-color: ${diamondColor};
    filter: ${isMyDiamond ? 'none' : isReady ? 'none' : 'brightness(0.3)'};
  `}
  box-sizing: border-box;
  transform: rotate(45deg);
`

const DiamondInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  ${mixinDiamondWrap}
  overflow: hidden;
`
const DiamondText = styled.div`
  position: absolute;
  top: -35px;
  left: -5px;
`

const DiamondContents = styled.div<{
  charactorName: string
  fontSize: CharacterDiamondShapeProps['fontSize']
}>`
  transform: rotate(-45deg);
  font-size: ${({ theme, fontSize }) => theme.fonts.sizes[fontSize]};
`
