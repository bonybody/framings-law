// 投稿カード

import styled from '@emotion/styled'

export type PostCardProps = {
  //
}

export const PostCard = ({}: PostCardProps) => {
  return (
    <Card>
      <PostInfo>3月11日/20代/男</PostInfo>
      <PostContent_parent>
        <PostContent>私が知っているモテる男の人たちに共通して</PostContent>
      </PostContent_parent>
    </Card>
  )
}

// 投稿内容の上の余白
const topSpace = '12'

// 投稿カード
const Card = styled.div({
  width: '92.4%',
  minHeight: '140px',
  backgroundColor: '#FFFFFF',
  border: 'solid 5px #2B2B2B',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
})

// 投稿日、年齢、性別
const PostInfo = styled.p({
  color: '#2B2B2B',
  margin: '0',
  padding: '18px 0 0 18px',
  fontFamily: 'yusei-magic, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px'
})

// 投稿内容
const PostContent = styled.p({
  color: '#2B2B2B',
  margin: '0',
  padding: '0 18px 29px 18px',
  paddingTop: topSpace + 'px',
  display: 'inline-block',
  fontFamily: 'yusei-magic, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px'
})

// 投稿内容にtextAlignをかける為の親要素
const PostContent_parent = styled.div({
  textAlign: 'center'
})
