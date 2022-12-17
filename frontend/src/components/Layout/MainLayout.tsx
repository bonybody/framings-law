import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

export type MainLayoutProps = {
  isCharacterBackground?: boolean
  children: ReactNode
}

export const MainLayout = ({ isCharacterBackground = false, children }: MainLayoutProps) => {
  if (isCharacterBackground) {
    return (
      <>
        <Background>
          <img src={'/background-chara.svg'} alt={''} />
        </Background>
        <UpperLeftTriangle>
          <img src={'/rectangle-secondary.svg'} alt={''} />
        </UpperLeftTriangle>
        {children}
        <BottomRightTriangle>
          <img src={'/rectangle-primary.svg'} alt={''} />
        </BottomRightTriangle>
      </>
    )
  }

  return (
    <>
      <UpperLeftTriangle>
        <img src={'/rectangle-secondary.svg'} alt={''} />
      </UpperLeftTriangle>
      {children}
      <BottomRightTriangle>
        <img src={'/rectangle-primary.svg'} alt={''} />
      </BottomRightTriangle>
    </>
  )
}

const triangleStyle = css`
  width: calc(80px + 40vw);
  vertical-align: bottom;
`

const Background = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  z-index: -1000;
  transform: translate(-50%, -50%);

  img {
    width: 100%;
  }
`

const UpperLeftTriangle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -999;

  img {
    ${triangleStyle}
  }
`

const BottomRightTriangle = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: -999;

  img {
    ${triangleStyle}
  }
`
