import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Button } from '@/components/Elements'
import { MainLayout } from '@/components/Layout'
import { useAuthContext } from '@/module/auth'

import { useGameJoinUser } from '../../api/getGameJoinUser'
import { GameId } from '../../types'
import { Win } from '../Win'
import { FramingCardList } from './FramingCardList'
import { Players } from './Players'

export type ResultProps = {
  gameId: GameId
}

export const Result = ({ gameId }: ResultProps) => {
  const { idToken } = useAuthContext()
  const { userList } = useGameJoinUser({ idToken, gameId })
  const router = useRouter()
  const [current, setCurrent] = useState<'winner' | 'result'>('winner')

  useEffect(() => {
    setTimeout(() => {
      setCurrent('result')
    }, 4000)
  }, [])

  return (
    <>
      {current === 'winner' && <Win gameId={gameId.toString()} />}
      {current === 'result' && (
        <MainLayout>
          <Container>
            <Players
              camp={'framer'}
              playerList={userList.filter((value) => {
                return value.isFramer === true
              })}
            />
            <FramingCardList gameId={gameId} />
            <Players
              camp={'finder'}
              playerList={userList.filter((value) => {
                return value.isFramer !== true
              })}
            />
            <ButtonWrap>
              <Button onClick={() => router.push('/')}>退出する</Button>
            </ButtonWrap>
          </Container>
        </MainLayout>
      )}
    </>
  )
}

const Container = styled.div`
  margin-top: 72px;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
`

const ButtonWrap = styled.div`
  margin-top: 42px;
  display: flex;
  justify-content: center;
`
