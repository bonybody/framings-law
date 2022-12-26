import styled from '@emotion/styled'
import { ReactNode } from 'react'

export type SubLayoutProps = {
  children: ReactNode
}

export const SubLayout = ({ children }: SubLayoutProps) => {
  return (
    <Container>
      <UpperLeftTriangle />
      <Divider />
      {children}
      <BottomRightTriangle />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

const Divider = styled.span`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  clip-path: polygon(0% 81%, 0% 79%, 100% 19%, 100% 21%);
  background-color: #2b2b2b;
  z-index: -998;
`

const UpperLeftTriangle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  clip-path: polygon(0% 80%, 0% 0%, 100% 0%, 100% 20%);
  background-color: ${({ theme }) => theme.colors.secondary.main};
  z-index: -999;
`

const BottomRightTriangle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  clip-path: polygon(0% 100%, 0% 80%, 100% 20%, 100% 100%);
  background-color: ${({ theme }) => theme.colors.primary.main};
  z-index: -999;
`
