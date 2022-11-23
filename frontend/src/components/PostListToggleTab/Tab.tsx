import styled from '@emotion/styled'

export type TabProps = {
  // 選択状態
  // isSelect: boolean
}

export const Tab = ({}: TabProps) => {
  return (
    <SwitchBtn>
      <BtnText>すべて</BtnText>
    </SwitchBtn>
  )
}

// ボタン本体
const SwitchBtn = styled.div`
  box-sizing: border-box;
  width: 160px;
  height: 32px;
  background-color: #ff8a00;
  border: 3px solid #2b2b2b;
`

// テキスト
const BtnText = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
  // フォントが来た時に判断したほうがよさそう
  /* text-shadow: 1px 0 0 #2b2b2b, -1px 0 0 #2b2b2b, 0 -1px 0 #2b2b2b, 0 1px 0 #2b2b2b,
    1px 1px 0 #2b2b2b, -1px -1px 0 #2b2b2b, -1px 1px 0 #2b2b2b, 1px -1px 0 #2b2b2b; */
  -webkit-text-stroke: 0.5px #2b2b2b;
`
