import styled from '@emotion/styled'

import { PostCard, TextWithShadow } from '@/components/Elements'
import { SubLayout } from '@/components/Layout'

export const DeleteCard = () => {
  return (
    <SubLayout>
      <Wrap>
        <PostCard
          postedDate={'2001-3-11'}
          content={'福島旅行楽しい！！今から県またぐー。'}
          isSelect={true}
          isFlamePost={true}
        />
        <Text>
          <TextWithShadow size={'body2'} shadowWidth={3}>
            が削除されました。
          </TextWithShadow>
        </Text>
      </Wrap>
    </SubLayout>
  )
}

const Wrap = styled.div`
  height: 100vh;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  margin-top: 24px;
`
