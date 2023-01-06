import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

import { GameStatus } from '@/api/@types'
import { TextWithShadow } from '@/components/Elements'
import { MainLayout } from '@/components/Layout'
import { apiClient } from '@/lib/api'
import { useAuthContext } from '@/module/auth'

export const Win = ({ gameId }: { gameId: string }) => {
  const { idToken } = useAuthContext()

  const [game, setGame] = useState<GameStatus | undefined>(undefined)

  useEffect(() => {
    void (async () => {
      const res = await apiClient({ idToken }).games._gameId_string(gameId).status.$get()
      console.log(res)
      setGame(res)
    })()
  }, [])

  return (
    <MainLayout>
      <Wrap>
        {game && (
          <>
            {game.code === 'framer' ? (
              <TextWithShadow size={'xl'} shadowWidth={7}>
                <Text>
                  <Role isFramer={true}>フレイマー</Role>
                  <br />
                  の勝利
                </Text>
              </TextWithShadow>
            ) : (
              <TextWithShadow size={'xl'} shadowWidth={7}>
                <Text>
                  <Role isFramer={false}>ファインダー</Role>
                  <br />
                  の勝利
                </Text>
              </TextWithShadow>
            )}
          </>
        )}
      </Wrap>
    </MainLayout>
  )
}

const Wrap = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.div`
  text-align: center;
  line-height: 80px;
`

const Role = styled.span<{ isFramer: boolean }>`
  color: ${(props) =>
    props.isFramer ? props.theme.colors.primary.main : props.theme.colors.secondary.main};
`
