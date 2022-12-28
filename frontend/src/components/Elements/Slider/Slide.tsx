import 'swiper/swiper-bundle.css'

import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { SwiperSlide } from 'swiper/react'

import { SlideTypes } from '../../../config/slideData'

export type SlideProps = {
  path: SlideTypes['path']
  children: ReactNode
}

export const Slide = ({ path, children }: SlideProps) => {
  return (

  )
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  video {
    object-fit: cover;
    min-width: 100vw;
    min-height: 100vh;
    aspect-ratio: 9 / 16;
  }
`

const DispContent = styled.div``
