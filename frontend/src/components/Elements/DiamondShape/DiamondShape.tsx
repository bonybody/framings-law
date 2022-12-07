import styled from '@emotion/styled'
import { ReactNode } from 'react'

export type DiamondShapeProps = {
  diagonal: number
  diamondColor: string
  borderColor: string
  borderSize: string
  fontSize: string
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.diagonal};
  height: ${(props) => props.diagonal};
`

const Diamond = styled.div<{
  diagonal: string
  diamondColor: string
  borderColor: string
  borderSize: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.diagonal};
  height: ${(props) => props.diagonal};
  background: ${(props) => props.diamondColor};
  box-sizing: border-box;
  border: ${(props) => props.borderSize} solid ${(props) => props.borderColor};
  transform: rotate(45deg);
`

const DiamondContents = styled.div<{ fontSize: string }>`
  transform: rotate(-45deg);
  font-size: ${(props) => props.fontSize};
`
