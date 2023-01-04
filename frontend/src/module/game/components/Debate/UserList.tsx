import styled from '@emotion/styled'

import { CharacterDiamondShape, CharacterDiamondShapeProps } from '@/components/Elements'
import { useAuthContext } from '@/module/auth'

import { useGameJoinUser } from '../../api/getGameJoinUser'
import { GameId } from '../../types'

export type UserListProps = {
  gameId: GameId
}

export const UserList = ({ gameId }: UserListProps) => {
  const { uid } = useAuthContext()
  const { userList } = useGameJoinUser({ uid, gameId })

  return (
    <Container>
      {userList?.players.map((player, index) => (
        <Content key={player.id} number={index}>
          <CharacterDiamondShape
            charactorName={
              player.character.displayName as CharacterDiamondShapeProps['charactorName']
            }
            isMyDiamond={player.userId !== uid}
            diagonal={56}
            borderSize={'3px'}
            fontSize={'12px'}
            textOffset={{ top: '-18px', left: '0px' }}
            isReady
          />
        </Content>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  width: 100%;
  height: 90px;
`

const Content = styled.div<{ number: number }>`
  &:nth-of-type(2),
  :nth-of-type(4) {
    position: relative;
    margin-top: auto;
    right: 5px;
  }
`
