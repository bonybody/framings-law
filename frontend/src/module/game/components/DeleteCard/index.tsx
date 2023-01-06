/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

import { GameCard } from '@/api/@types'
import { PostCard, TextWithShadow } from '@/components/Elements'
import { SubLayout } from '@/components/Layout'
import { apiClient } from '@/lib/api'
import { useAuthContext } from '@/module/auth'

export const DeleteCard = ({ cardId, gameId }: { cardId: string; gameId: string }) => {
  const [card, setCard] = useState<GameCard | undefined>(undefined)
  const { idToken } = useAuthContext()
  useEffect(() => {
    void (async () => {
      const res = await apiClient({ idToken })
        .games._gameId_string(gameId)
        .cards._cardId(cardId)
        .$get()
      setCard(res.card)
    })()
  }, [cardId, gameId])

  return (
    <SubLayout>
      <Wrap>
        {card && (
          <>
            <PostCard
              postedDate={card.card!.postedAt!}
              content={card.card!.body!}
              isSelect={true}
              isFlamePost={false}
            />
            <Text>
              <TextWithShadow size={'body2'} shadowWidth={3}>
                が削除されました。
              </TextWithShadow>
            </Text>
          </>
        )}
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
