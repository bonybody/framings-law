import styled from '@emotion/styled'

import { TextWithShadow } from '@/components/Elements'
import { MainLayout } from '@/components/Layout'

export const Assignment = () => {
  const isFramer = true

  return (
    <MainLayout>
      <Wrap>
        <Text>
          <TextWithShadow size={'body2'} shadowWidth={3}>
            あなたは、
          </TextWithShadow>
        </Text>
        {isFramer ? (
          <Role isFramer={isFramer}>
            <TextWithShadow size={'xl'} shadowWidth={7}>
              <span>フレイマー</span>
            </TextWithShadow>
          </Role>
        ) : (
          <Role isFramer={isFramer}>
            <TextWithShadow size={'xl'} shadowWidth={7}>
              <span>ファウンダー</span>
            </TextWithShadow>
          </Role>
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
  margin-top: -240px;
`

const Role = styled.div<{ isFramer: boolean }>`
  position: absolute;

  span {
    color: ${(props) =>
      props.isFramer ? props.theme.colors.primary.main : props.theme.colors.secondary.main};
  }
`
