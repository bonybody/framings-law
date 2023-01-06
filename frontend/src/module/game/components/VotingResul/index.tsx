import styled from '@emotion/styled'

import { TextWithShadow } from '@/components/Elements'
import { SubLayout } from '@/components/Layout'

export const VotingResult = ({ end }: { end: boolean }) => {
  return (
    <SubLayout>
      <Wrap>
        {end ? (
          <TextWithShadow size={'lg'} shadowWidth={7}>
            決着
          </TextWithShadow>
        ) : (
          <TextWithShadow size={'lg'} shadowWidth={7}>
            炎上投稿がまだ
            <br />
            残っています。
          </TextWithShadow>
        )}
      </Wrap>
    </SubLayout>
  )
}
const Wrap = styled.div`
  text-align: center;
  height: 100vh;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
