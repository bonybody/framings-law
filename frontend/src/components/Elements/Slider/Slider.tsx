import 'swiper/swiper-bundle.css'

import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Slide } from './data'

export type SliderProps = {
  //
}

export const Slider = ({}: SliderProps) => {
  return (
    <Swiper slidesPerView={1}>
      {Slide.map((data, index) => (
        <SwiperSlide key={index}>
          <Content>
            <video id="video" playsInline muted autoPlay loop>
              <source src={data.path} type="video/mp4" />
              <p>動画を再生できる環境ではありません。</p>
            </video>
          </Content>
        </SwiperSlide>
      ))}
    </Swiper>
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
