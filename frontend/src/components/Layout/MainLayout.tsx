import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

export type MainLayoutProps = {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
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
  width: calc(260px + 5vw);
  vertical-align: bottom;
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
