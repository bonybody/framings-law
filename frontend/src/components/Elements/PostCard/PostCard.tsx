// 投稿カード

import styled from '@emotion/styled'

export type PostCardProps = {
  //
}

export const PostCard = ({}: PostCardProps) => {
  return (
    <Card>
      <PostInfo>{postInfo_text}</PostInfo>
      <PostContent_parent>
        <PostContent>{postContent_text}</PostContent>
      </PostContent_parent>
    </Card>
  )
}

// 投稿日、年齢、性別
const postInfo_text = '3月11日/20代/男'
// 投稿内容
const postContent_text = '〇〇を見る会??? ざけんな税金払うのアホくさ。 ００党に投票するやつ頭悪い。'

// 投稿内容の文字数
const contentLength = postContent_text.length
// 投稿内容のプロパティ値を入れる変数
const valueList: string[] = []
// 投稿内容の文量から上下の余白とtextAlignの値を設定
function setOptionValue() {
  switch (true) {
    case contentLength <= 21: // 一行で収まる文
      valueList.push('26') // 上
      valueList.push('56') // 下
      valueList.push('center') // textAlign
      break
    case contentLength <= 44 && 22 <= contentLength: // 二行くらい
      valueList.push('12')
      valueList.push('50')
      valueList.push('left')
      break
    default: // 長いやつ
      valueList.push('12')
      valueList.push('29')
      valueList.push('left')
  }
  return valueList
}
const optionValue = setOptionValue()

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
  fontSize: '14px',
  lineHeight: '20px'
})

// 投稿内容
const PostContent = styled.p({
  color: '#2B2B2B',
  margin: '0',
  padding: '0 18px 0px 20px',
  paddingTop: optionValue[0] + 'px',
  paddingBottom: optionValue[1] + 'px',
  display: 'inline-block',
  fontFamily: 'yusei-magic, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px'
})

// ↓わかんない！！！！！！
// 型エラー(?)が出てるけど反映されてる。デベロッパーツールにもエラーなし。
// 投稿内容にtextAlignをかける為の親要素
const PostContent_parent = styled.div({
  textAlign: optionValue[2]
})
