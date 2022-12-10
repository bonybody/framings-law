import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

export type LoadingProps = {
  // wrapWidth: string
}

export const Loading = ({}: LoadingProps) => {
  const [test, setTest] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
      }
      setTest((sizes?.height - sizes?.width) / 2 + 1)
    }
  }, [])

  return (
    <LoadingAnim>
      <UpperLeftTriangle test={`${test}px`}>
        <img src={'/triangle1.svg'} alt="" />
      </UpperLeftTriangle>
      <BottomRightTriangle test={`${test}px`}>
        <img src={'/triangle2.svg'} alt="" />
      </BottomRightTriangle>
    </LoadingAnim>
  )
}

const LoadingAnim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
`

const UpperLeftTriangle = styled.figure<{ test: string }>`
  margin: 0;
  width: 50vw;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  z-index: -999;

  img {
    vertical-align: bottom;
    animation: upper-left-triangle-anim 1s forwards;
    animation-delay: 1s;
    transform-origin: top left;
  }

  &::before {
    width: 100vw;
    display: block;
    content: '';
    background-color: #33ce68;
    animation: upper-left-triangle-before-anim 1s forwards;
    animation-delay: 1.6s;
    transform-origin: top;
  }

  @keyframes upper-left-triangle-before-anim {
    0% {
      height: 0px;
    }
    100% {
      height: ${(props) => props.test};
    }
  }

  @keyframes upper-left-triangle-anim {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(2);
    }
  }
`

const BottomRightTriangle = styled.figure<{ test: string }>`
  margin: 0;
  width: 50vw;
  position: absolute;
  margin: 0;
  bottom: 0;
  right: 0;
  z-index: -999;

  img {
    vertical-align: bottom;
    animation: bottom-right-triangle-anim 1s forwards;
    animation-delay: 1s;
    transform-origin: bottom right;
  }

  &::after {
    margin-left: -50vw;
    width: 100vw;
    display: block;
    content: '';
    background-color: #ff8a00;
    animation: bottom-right-triangle-after-anim 1s forwards;
    animation-delay: 1.6s;
    transform-origin: bottom right;
  }

  @keyframes bottom-right-triangle-anim {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(2);
    }
  }

  @keyframes bottom-right-triangle-after-anim {
    0% {
      height: 0px;
    }
    100% {
      height: ${(props) => props.test};
    }
  }
`
