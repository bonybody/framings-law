/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from '@emotion/styled'

import { PostCard } from '@/components/Elements'
import { useAuthContext } from '@/module/auth'

import { useGameFramingCards } from '../../api/getGameFramingCards'
import { GameId } from '../../types'

export type FramingCardListProps = {
  gameId: GameId
}

export const FramingCardList = ({ gameId }: FramingCardListProps) => {
  const { idToken } = useAuthContext()
  const { framingCardList } = useGameFramingCards({ idToken, gameId })

  return (
    <Wrap>
      {framingCardList &&
        framingCardList.map((card) => (
          <PostCard
            key={card.id}
            isSelect={true}
            content={card.card!.body!}
            isFlamePost={card.card!.isFraming!}
            postedDate={card.card!.postedAt!.split('T')[0]}
          />
        ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`
