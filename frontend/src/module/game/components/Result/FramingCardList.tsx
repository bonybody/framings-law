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
            age={'20'}
            gender={'男'}
            isSelect={true}
            content={card.card!.body!}
            isFlamePost={card.card!.isFraming!}
            postedDate={card.card!.postedAt!}
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
