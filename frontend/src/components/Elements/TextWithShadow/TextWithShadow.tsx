import { Theme } from '@emotion/react'
import styled from '@emotion/styled'

export type TextWithShadowProps = {
  size: keyof Theme['fonts']['sizes']
  shadowWidth: number
  text: string
}

export const TextWithShadow = styled.div<{
  size: TextWithShadowProps['size']
  shadowWidth: TextWithShadowProps['shadowWidth']
}>`
  color: white;
  font-size: ${({ size, theme: { fonts } }) => fonts.sizes[size]};
  text-shadow: ${({
    shadowWidth
  }) => `0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b,
    0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b,
    0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b, 0 0 ${shadowWidth}px #2b2b2b,
    0 0 ${shadowWidth}px #2b2b2b`};
`
