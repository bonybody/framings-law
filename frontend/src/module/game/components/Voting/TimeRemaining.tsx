import styled from '@emotion/styled'

import { TextWithShadow } from '@/components/Elements'

export const TimeRemaining = () => {
  return (
    <Text size={'body2'} shadowWidth={3}>
      残り015秒
    </Text>
  )
}

const Text = styled(TextWithShadow)`
  padding-top: 6vh;
  text-align: center;
`
