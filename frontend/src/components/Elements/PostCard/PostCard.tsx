// 投稿カード

import styled from '@emotion/styled'

export type PostCardProps = {
  // 投稿日、年齢、性別
  postInfo_text: string
  // 投稿内容
  postContent_text: string
  // 選択できる状態か否か
  canSelect: boolean
  // 炎上カードだと思ったか
  judgBurst: boolean
}

export const PostCard = ({
  postInfo_text,
  postContent_text,
  canSelect,
  judgBurst
}: PostCardProps) => {
  return (
    <Card judgBurst={judgBurst} canSelect={canSelect}>
      <PostInfo>{postInfo_text}</PostInfo>
      <PostContent_parent>
        <PostContent>{postContent_text}</PostContent>
      </PostContent_parent>
    </Card>
  )
}

// 投稿カード
const Card = styled.div<{ judgBurst: boolean; canSelect: boolean }>`
  position: relative;
  width: 100%;
  min-height: 140px;
  background-color: ${(props) => (props.judgBurst ? '#FFAA2C' : '#FFFFFF')};
  border: solid 5px #2b2b2b;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  opacity: ${(props) => (props.canSelect ? 'none' : '0.5')};

  // 炎
  &::before {
    display: inline-block;
    width: 88px;
    height: 111px;
    position: absolute;
    right: 0;
    bottom: 0;
    content: '';
    background-image: ${(props) => (props.judgBurst ? "url('/fire.png')" : 'none')};
    background-size: cover;
    z-index: -1;
  }
`

// 投稿日、年齢、性別
const PostInfo = styled.p`
  color: #2b2b2b;
  margin: 0;
  padding: 18px 0 0 18px;
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
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

// 投稿内容にtextAlignをかける為の親要素
const PostContent_parent = styled.div`
  text-align: left;
`
