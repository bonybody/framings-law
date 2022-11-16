// 投稿カード

import styled from '@emotion/styled'

export type PostCardProps = {
  // 投稿日
  PostedDate: string
  // 年齢
  Age: string
  // 性別
  Gender: string
  // 投稿内容
  content: string
  // 選択できる状態か否か
  isSelect: boolean
  // 炎上カードだと思ったか
  isFlamePost: boolean
}

export const PostCard = ({
  PostedDate,
  Age,
  Gender,
  content,
  isSelect,
  isFlamePost
}: PostCardProps) => {
  return (
    <Card isFlamePost={isFlamePost} isSelect={isSelect}>
      <PostInfo>
        <PostText>{PostedDate + '/' + Age + '代/' + Gender}</PostText>
      </PostInfo>
      <PostContent>
        <PostText>{content}</PostText>
      </PostContent>
    </Card>
  )
}

// 投稿カード
const Card = styled.div<{ isFlamePost: boolean; isSelect: boolean }>`
  position: relative;
  width: 100%;
  min-height: 140px;
  background-color: ${(props) => (props.isFlamePost ? '#FFAA2C' : '#FFFFFF')};
  border: solid 5px #2b2b2b;
  box-shadow: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  opacity: ${(props) => (props.isSelect ? 'none' : '0.5')};
  box-sizing: border-box;

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
const PostInfo = styled.p`
  margin: 0;
  padding: 18px 0 0 18px;
`
// テキスト
const PostText = styled.p`
  margin: 0;
  color: #2b2b2b;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`
// 投稿内容
const PostContent = styled.p`
  color: #2b2b2b;
  margin: 0;
  padding: 0 18px 0px 20px;
  padding-top: 12px;
  padding-bottom: 29px;
  display: inline-block;
`
