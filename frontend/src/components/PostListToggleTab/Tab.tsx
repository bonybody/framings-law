import styled from '@emotion/styled'

export type AllTabProps = {
  // タブ選択状態
  selectedTab: string
  // フレイマーかどうか
  isFlamer: boolean
  // テキスト
  tabName: string
  // タブアイコン
  icon: string
}

export type FlamerTabProps = {
  // タブ選択状態
  selectedTab: string
  // フレイマーかどうか
  isFlamer: boolean
  // テキスト
  tabName: string
  // タブアイコン
  icon: string
}

export const AllTab = ({ selectedTab, tabName, icon }: AllTabProps) => {
  return (
    <SwitchBtn selectedTab={selectedTab}>
      <Icon icon={icon} />
      <BtnText>{tabName}</BtnText>
    </SwitchBtn>
  )
}

export const FlamerTab = ({ selectedTab, isFlamer, tabName, icon }: FlamerTabProps) => {
  return (
    <SwitchBtn selectedTab={selectedTab} isFlamer={isFlamer}>
      <Icon icon={icon} />
      <BtnText>{tabName}</BtnText>
    </SwitchBtn>
  )
}

// ボタン本体
const SwitchBtn = styled.div<{ selectedTab: string; isFlamer?: boolean }>`
  padding: 4px 0 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 49.1%;
  height: 32px;
  background-color: ${(props) => (props.selectedTab === 'frame' ? '#FF8A00' : '#D9D9D9')};
  border: 3px solid #2b2b2b;
  opacity: ${(props) => (props.isFlamer ? '0.5' : 'none')};
`

// テキスト
const BtnText = styled.p`
  display: inline-block;
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

// アイコン
const Icon = styled.p<{ icon: string }>`
  margin: 0;
  width: ${(props) => (props.icon == "url('/card.svg')" ? '30px' : '16.95px')};
  height: ${(props) => (props.icon == "url('/card.svg')" ? '13.71px' : '20.87px')};
  margin-right: 12px;
  background-image: ${(props) => props.icon};
  background-size: cover;
`
