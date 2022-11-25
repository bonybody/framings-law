import styled from '@emotion/styled'

export type TabProps = {
  // タブ選択状態
  isSelect: boolean
  // 選択可否状態
  isActive: boolean
  // テキスト
  tabName: string
  // タブアイコン
  icon: string
}

export const Tab = ({ isSelect, isActive, tabName, icon }: TabProps) => {
  return (
    <SwitchBtn isSelect={isSelect} isActive={isActive}>
      <BtnText icon={icon}>{tabName}</BtnText>
    </SwitchBtn>
  )
}

// ボタン本体
const SwitchBtn = styled.div<{ isSelect: boolean; isActive: boolean }>`
  box-sizing: border-box;
  width: 49.1%;
  height: 32px;
  background-color: ${(props) => (props.isSelect ? '#FF8A00' : '#D9D9D9')};
  border: 3px solid #2b2b2b;
  opacity: ${(props) => (props.isActive ? 'none' : '0.5')};
`

// テキスト
const BtnText = styled.p<{ icon: string }>`
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

  // アイコン
  &::before {
    display: inline-block;
    width: ${(props) => (props.icon == "url('/cards.png')" ? '30px' : '16.95px')};
    height: ${(props) => (props.icon == "url('/cards.png')" ? '13.71px' : '20.87px')};
    right: 0;
    bottom: 0;
    content: '';
    background-image: ${(props) => props.icon};
    background-size: cover;
    z-index: -1;
  }
`
