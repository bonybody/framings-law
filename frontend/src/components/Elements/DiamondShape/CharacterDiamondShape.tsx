import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Fonts } from '@/styles'

import { mixinDiamondWrap } from './mixin'

export type CharacterObj = {
  character: {
    anne: {
      kanaName: 'アンネ'
      path: './anne.svg'
      backgroundColor: '#5E99C3'
    }
    dai: {
      kanaName: 'ダイ'
      path: './fire.svg'
      backgroundColor: '#5E99C3'
    }
  }
}

export const characterObj: CharacterObj = {
  character: {
    anne: {
      kanaName: 'アンネ',
      path: './anne.svg',
      backgroundColor: '#5E99C3'
    },
    dai: {
      kanaName: 'ダイ',
      path: './fire.svg',
      backgroundColor: '#5E99C3'
    }
  }
}

export type CharacterDiamondShapeProps = {
  diagonal: number
  borderSize: string
  fontSize: keyof Fonts['sizes']
  isMyDiamond: boolean
  isReady: boolean
  charactorName: keyof CharacterObj['character']
}

export const CharacterDiamondShape = ({
  diagonal,
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
        <DiamondWrapper>
          <Diamond
            diagonal={shapeDiagonal}
            diamondColor={characterObj.character[charactorName].backgroundColor}
            borderSize={borderSize}
            isMyDiamond={isMyDiamond}
            isReady={isReady}
          >
            <DiamondInnerContainer>
              <DiamondContents fontSize={fontSize} charactorName={charactorName}>
                <CharacterImage src={characterObj.character[charactorName].path} />
              </DiamondContents>
            </DiamondInnerContainer>
          </Diamond>
          <DiamondText isMyDiamond={isMyDiamond}>
            {characterObj.character[charactorName].kanaName}
          </DiamondText>
        </DiamondWrapper>
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

const DiamondWrapper = styled.div`
  position: relative;
  transform: rotate(45deg);
`

const Diamond = styled.div<{
  diagonal: string
  diamondColor: string
  borderSize: string
  isMyDiamond: boolean
  isReady: boolean
}>`
  ${mixinDiamondWrap}
  position: relative;
  ${({ diagonal, diamondColor, borderSize, isMyDiamond, isReady, theme }) => css`
    width: ${diagonal};
    height: ${diagonal};
    border: ${borderSize} solid ${isMyDiamond ? theme.colors.primary.dark : theme.colors.white};
    background-color: ${diamondColor};
    filter: ${isMyDiamond ? 'none' : isReady ? 'none' : 'brightness(0.3)'};
  `}
  box-sizing: border-box;
`

const DiamondInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  ${mixinDiamondWrap}
  overflow: hidden;
`

const CharacterImage = styled.img`
  width: 135%;
  height: 135%;
  margin-top: -22%;
  margin-left: -19%;
`

const DiamondContents = styled.div<{
  charactorName: string
  fontSize: CharacterDiamondShapeProps['fontSize']
}>`
  width: 100%;
  height: 100%;
  transform: rotate(-45deg);
  font-size: ${({ theme, fontSize }) => theme.fonts.sizes[fontSize]};
`
const DiamondText = styled.div<{
  isMyDiamond: boolean
}>`
  position: absolute;
  top: -25px;
  left: 5px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.fontFamily.sub};
  color: ${({ isMyDiamond, theme }) =>
    isMyDiamond ? theme.colors.primary.dark : theme.colors.white};
`
