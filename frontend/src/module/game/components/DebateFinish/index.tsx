import styled from '@emotion/styled'

import { TextWithShadow } from '@/components/Elements'
import { SubLayout } from '@/components/Layout'

export const DebateFinish = () => {
  return (
    <SubLayout>
      <Wrap>
        <TextWithShadow size={'body2'} shadowWidth={3}>
          ディベート終了。
          <br />
          炎上しそうな投稿を
          <br />
          選んでください。
        </TextWithShadow>
      </Wrap>
    </SubLayout>
  )
}

const Wrap = styled.div`
  text-align: center;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`
