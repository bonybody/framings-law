import styled from '@emotion/styled'

export type TabProps = {
  // タブ選択状態
  selectedTab: 'all' | 'flame'
  // クリック
  handleTab: (arg: TabProps['selectedTab']) => void
}

export type AllTabProps = TabProps

export type FlamerTabProps = {
  // フレイマーかどうか
  isFlamer: boolean
} & TabProps

export const AllTab = ({ selectedTab, handleTab }: AllTabProps) => {
  return (
    <SwitchButton isSelected={selectedTab === 'all'} onClick={() => handleTab('all')}>
      <AllIcon />
      <ButtonText>すべて</ButtonText>
    </SwitchButton>
  )
}

export const FlamerTab = ({ selectedTab, isFlamer, handleTab }: FlamerTabProps) => {
  if (!isFlamer) {
    return (
      <FlameSwitchButton isSelected={selectedTab === 'flame'} isFlamer={isFlamer}>
        <FlameIcon />
        <ButtonText>炎上</ButtonText>
      </FlameSwitchButton>
    )
  }

  return (
    <FlameSwitchButton
      isSelected={selectedTab === 'flame'}
      isFlamer={isFlamer}
      onClick={() => handleTab('flame')}
    >
      <FlameIcon />
      <ButtonText>炎上</ButtonText>
    </FlameSwitchButton>
  )
}

// ボタン本体
const SwitchButton = styled.button<{ isSelected: boolean }>`
  padding: 4px 0 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  background-color: ${(props) => (props.isSelected ? '#FF8A00' : '#D9D9D9')};
  border: 3px solid #2b2b2b;
`

// すべてタブ本体
const FlameSwitchButton = styled(SwitchButton)<{ isFlamer: boolean }>`
  opacity: ${({ isFlamer = false }) => (isFlamer ? 'none' : '0.5')};
`

// テキスト
const ButtonText = styled.p`
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

// すべてアイコン
const AllIcon = styled.span`
  margin: 0;
  width: 30px;
  height: 13.71px;
  margin-right: 12px;
  background-image: url('/card.svg');
  background-size: cover;
`

// 炎上アイコン
const FlameIcon = styled.span`
  margin: 0;
  width: 16.95px;
  height: 20.87px;
  margin-right: 12px;
  background-image: url('/fire.svg');
  background-size: cover;
`
