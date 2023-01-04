import { PostCard } from '@/components/Elements'

import { usePostCard } from '../../api/getPostCard'

export type PostCardListProps = {
  gameId: string | number
  isFlamer: boolean
}

export const PostCardList = ({ gameId, isFlamer }: PostCardListProps) => {
  const { cardList } = usePostCard({ gameId, isFlaming: isFlamer, isDeleted: true })

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
