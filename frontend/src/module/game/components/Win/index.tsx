import styled from '@emotion/styled'

import { TextWithShadow } from '@/components/Elements'
import { MainLayout } from '@/components/Layout'

export const Win = () => {
  const isFramer = false
  return (
    <MainLayout>
      <Wrap>
        {isFramer ? (
          <TextWithShadow size={'xl'} shadowWidth={7}>
            <Text>
              <Role isFramer={isFramer}>フレイマー</Role>
              <br />
              の勝利
            </Text>
          </TextWithShadow>
        ) : (
          <TextWithShadow size={'xl'} shadowWidth={7}>
            <Text>
              <Role isFramer={isFramer}>ファウンダー</Role>
              <br />
              の勝利
            </Text>
          </TextWithShadow>
        )}
      </Wrap>
    </MainLayout>
  )
}

const Wrap = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.div`
  text-align: center;
  line-height: 80px;
`

const Role = styled.span<{ isFramer: boolean }>`
  color: ${(props) =>
    props.isFramer ? props.theme.colors.primary.main : props.theme.colors.secondary.main};
`
