import styled from '@emotion/styled'

import { GamePlayer } from '@/api/@types'
import { CharacterDiamondShape, CharacterDiamondShapeProps } from '@/components/Elements'

export type PlayersProps = {
  camp: 'framer' | 'finder'
  playerList: GamePlayer[]
}

export const Players = ({ camp, playerList }: PlayersProps) => {
  return (
    <PlayerGroupWrap camp={camp}>
      <PlayerGroup>
        {camp === 'framer' ? (
          <RoleText camp={camp}>フレイマー</RoleText>
        ) : (
          <RoleText camp={camp}>ファインダー</RoleText>
        )}
        <PlayerWrap>
          {playerList &&
            playerList.map((player) => (
              <>
                <CharacterDiamondShape
                  charactorName={
                    player.character!.displayName as CharacterDiamondShapeProps['charactorName']
                  }
                  isMyDiamond={camp === 'framer' ? true : false}
                  diagonal={82}
                  borderSize={'3px'}
                  fontSize={'12px'}
                  textOffset={{ top: '-18px', left: '0px' }}
                  isReady
                />
              </>
            ))}
        </PlayerWrap>
      </PlayerGroup>
    </PlayerGroupWrap>
  )
}

const PlayerGroupWrap = styled.div<Required<Pick<PlayersProps, 'camp'>>>`
  display: flex;
  justify-content: ${(props) => (props.camp === 'framer' ? 'flex-end' : 'flex-start')};
`

const PlayerGroup = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`

const PlayerWrap = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 8px;
`

const RoleText = styled.span<Required<Pick<PlayersProps, 'camp'>>>`
  display: block;
  margin-top: 16px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  font-size: 20px;
  color: ${(props) =>
    props.camp === 'framer' ? props.theme.colors.primary.main : props.theme.colors.secondary.main};
`
