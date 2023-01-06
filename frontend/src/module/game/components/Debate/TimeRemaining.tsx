import styled from '@emotion/styled'

import { TextWithShadow } from '@/components/Elements'

export type TimeRemainingProps = {
  timeLimit: number
}
export const TimeRemaining = (props: TimeRemainingProps) => {
  const { timeLimit } = props
  return (
    <Text size={'body2'} shadowWidth={3}>
      残り{timeLimit}秒
    </Text>
  )
}

const Text = styled(TextWithShadow)`
  padding-top: 6vh;
  text-align: center;
`
