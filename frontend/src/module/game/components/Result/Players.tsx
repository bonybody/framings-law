import styled from '@emotion/styled'
import { Fragment } from 'react'

import { GamePlayer } from '@/api/@types'
import { CharacterDiamondShape, CharacterDiamondShapeProps } from '@/components/Elements'

export type PlayersProps = {
  camp: 'framer' | 'finder'
  playerList: GamePlayer[]
}

export const Players = ({ camp, playerList }: PlayersProps) => {
  return (
    <div>
      {camp === 'framer' ? (
        <RoleText camp={camp}>フレイマー</RoleText>
      ) : (
        <RoleText camp={camp}>ファインダー</RoleText>
      )}
      <PlayerWrap camp={camp}>
        {playerList &&
          playerList.map((player, index) => (
            <Fragment key={index}>
              <CharacterDiamondShape
                charactorName={
                  player.character!.displayName as CharacterDiamondShapeProps['charactorName']
                }
                isMyDiamond={camp === 'framer' ? true : false}
                diagonal={64}
                borderSize={'3px'}
                fontSize={'12px'}
                textOffset={{ top: '-18px', left: '0px' }}
                isReady
              />
            </Fragment>
          ))}
      </PlayerWrap>
    </div>
  )
}

const PlayerWrap = styled.div<Required<Pick<PlayersProps, 'camp'>>>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.camp === 'framer' ? 'flex-end' : 'flex-start')};
  gap: 8px;
  margin: ${({ camp }) => (camp === 'framer' ? '16px auto 0 auto' : '16px 0 0 0')};
  margin-right: 0;
`

const RoleText = styled.div<Required<Pick<PlayersProps, 'camp'>>>`
  display: block;
  margin-top: 16px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  font-size: 20px;
  font-weight: bold;
  text-align: ${({ camp }) => (camp === 'framer' ? 'center' : 'left')};

  color: ${(props) =>
    props.camp === 'framer' ? props.theme.colors.primary.main : props.theme.colors.secondary.main};
`
