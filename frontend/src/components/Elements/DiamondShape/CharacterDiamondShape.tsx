import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { mixinDiamondWrap } from './mixin'

export type CharacterObj = {
  character: {
    anne: {
      kanaName: 'アンネ'
      path: '/anne.svg'
      backgroundColor: '#5E99C3'
    }
    dai: {
      kanaName: 'ダイ'
      path: '/fire.svg'
      backgroundColor: '#5E99C3'
    }
    noPlayer: {
      kanaName: 'Player'
      path: ''
      backgroundColor: '#DF114F'
    }
  }
}

export const characterObj: CharacterObj = {
  character: {
    anne: {
      kanaName: 'アンネ',
      path: '/anne.svg',
      backgroundColor: '#5E99C3'
    },
    dai: {
      kanaName: 'ダイ',
      path: '/fire.svg',
      backgroundColor: '#5E99C3'
    },
    noPlayer: {
      kanaName: 'Player',
      path: '',
      backgroundColor: '#DF114F'
    }
  }
}

export type CharacterDiamondShapeProps = {
  diagonal: number
  borderSize: string
  fontSize: string
  isMyDiamond: boolean
  isReady: boolean
  charactorName: keyof CharacterObj['character']
  textOffset: { top: string; left: string }
}

export const CharacterDiamondShape = ({
  diagonal,
  borderSize,
  fontSize,
  isMyDiamond,
  isReady,
  charactorName,
  textOffset
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
              <DiamondContents>
                {charactorName === 'noPlayer' ? (
                  <NoPlayer>Player</NoPlayer>
                ) : (
                  <CharacterImage src={characterObj.character[charactorName].path} />
                )}
              </DiamondContents>
            </DiamondInnerContainer>
          </Diamond>
          <DiamondText isMyDiamond={isMyDiamond} fontSize={fontSize} textOffset={textOffset}>
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

const DiamondContents = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotate(-45deg);
`

const DiamondText = styled.div<{
  isMyDiamond: boolean
  fontSize: CharacterDiamondShapeProps['fontSize']
  textOffset: CharacterDiamondShapeProps['textOffset']
}>`
  position: absolute;
  font-weight: bold;

  ${({ isMyDiamond, fontSize, textOffset, theme: { colors, fonts } }) => css`
    top: ${textOffset.top};
    left: ${textOffset.left};
    font-size: ${fontSize};
    font-family: ${fonts.fontFamily.sub};
    color: ${isMyDiamond ? colors.primary.dark : colors.white};
  `}
`

const NoPlayer = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  top: 45%;
  left: 50%;
  line-height: 16px;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
`
