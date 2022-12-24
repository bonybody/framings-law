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
  top: 20%;
  left: 50%;
  width: 100%;
  height: 100vh;
  z-index: -1000;
  transform: translate(-50%, -50%);

  /* background-image: url('/background-chara.svg');
  background-size: cover;
  background-position: center 40%;
  background-repeat: no-repeat; */

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
    /* box-sizing: border-box; */
    /* border-right: 10px solid #2b2b2b; */
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
