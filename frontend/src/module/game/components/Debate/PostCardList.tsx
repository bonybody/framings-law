/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from '@emotion/styled'

import { PostCard, PostListToggleTabProps } from '@/components/Elements'
import { useAuthContext } from '@/module/auth'

import { usePostCard } from '../../api/getPostCard'
import { GameId } from '../../types'

export type PostCardListProps = {
  gameId: GameId
  isFlamer: boolean
  selectedTab: Required<PostListToggleTabProps['selectedTab']>
}

export const PostCardList = ({ gameId, isFlamer, selectedTab }: PostCardListProps) => {
  const { idToken } = useAuthContext()
  const { cardList } = usePostCard({ idToken, gameId })

  if (selectedTab === 'flame') {
    return (
      <>
        {cardList &&
          cardList
            .filter((card) => card.card!.isFraming === true)
            .map((flameCard) => (
              <PostCardContainer key={flameCard.id}>
                <PostCard
                  isSelect
                  content={flameCard.card!.body!}
                  isFlamePost={isFlamer === true ? flameCard.card!.isFraming! : false}
                  postedDate={flameCard.card!.postedAt!.split('T')[0]}
                />
              </PostCardContainer>
            ))}
      </>
    )
  }

  return (
    <>
      {cardList &&
        cardList.map((all) => (
          <PostCardContainer key={all.id}>
            <PostCard
              isSelect
              content={all.card!.body!}
              isFlamePost={isFlamer === true ? all.card!.isFraming! : false}
              postedDate={all.card!.postedAt!.split('T')[0]}
            />
          </PostCardContainer>
        ))}
    </>
  )
}

const PostCardContainer = styled.div`
  padding-top: 16px;
`
