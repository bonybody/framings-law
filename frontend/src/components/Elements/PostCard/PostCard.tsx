// 投稿カード

import styled from '@emotion/styled'

export type PostCardProps = {
  // 投稿日
  postedDate: string
  // 年齢
  age: string
  // 性別
  gender: string
  // 投稿内容
  content: string
  // 選択できる状態か否か
  isSelect: boolean
  // 炎上カードだと思ったか
  isFlamePost: boolean
}

export const PostCard = ({
  postedDate,
  age,
  gender,
  content,
  isSelect,
  isFlamePost
}: PostCardProps) => {
  return (
    <Card isFlamePost={isFlamePost} isSelect={isSelect}>
      <PostInfo>
        <PostText>{postedDate + '/' + age + '代/' + gender}</PostText>
      </PostInfo>
      <PostContent>
        <PostText>{content}</PostText>
      </PostContent>
    </Card>
  )
}

// 投稿カード
const Card = styled.div<Required<Pick<PostCardProps, 'isSelect' | 'isFlamePost'>>>`
  font-size: ${(props) => props.theme.fonts.sizes.xs};
  position: relative;
  width: 100%;
  min-height: 140px;
  padding: 18px 18px 29px 18px;
  background-color: ${(props) =>
    props.isFlamePost ? props.theme.colors.primary.main : props.theme.colors.white};
  border: solid 5px #2b2b2b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: ${(props) => (props.isSelect ? 'none' : props.theme.opacity)};
  box-sizing: border-box;
  z-index: -1;

  // 炎
  &::before {
    display: inline-block;
    width: 88px;
    height: 111px;
    position: absolute;
    right: 0;
    bottom: 0;
    content: '';
    background-image: ${(props) => (props.isFlamePost ? "url('/fire.png')" : 'none')};
    background-size: cover;
    z-index: -1;
  }
`

// 投稿日、年齢、性別
const PostInfo = styled.div`
  margin: 0;
`
// テキスト
const PostText = styled.p`
  margin: 0;
  color: #2b2b2b;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  word-break: break-all;
`
// 投稿内容
const PostContent = styled.div`
  margin: 0;
  padding-top: 12px;
  display: inline-block;
`
