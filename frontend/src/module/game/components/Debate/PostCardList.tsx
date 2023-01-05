import { PostCard } from '@/components/Elements'
import { useAuthContext } from '@/module/auth'

import { usePostCard } from '../../api/getPostCard'
import { GameId } from '../../types'

export type PostCardListProps = {
  gameId: GameId
  isFlamer: boolean
}

export const PostCardList = ({ gameId, isFlamer }: PostCardListProps) => {
  const { idToken } = useAuthContext()
  const { cardList } = usePostCard({ idToken, gameId, isFlaming: isFlamer, isDeleted: true })

  return (
    <>
      {cardList &&
        cardList.map((card) => (
          <PostCard
            key={card.id}
            age={'20'}
            gender={'男'}
            isSelect={false}
            content={card.card!.body!}
            isFlamePost={card.card!.isFraming!}
            postedDate={card.card!.postedAt!}
          />
        ))}
    </>
  )
}
