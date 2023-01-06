import styled from '@emotion/styled'
import { useEffect, useMemo, useState } from 'react'

import { GamePlayer } from '@/api/@types'
import { TextWithShadow } from '@/components/Elements'
import { MainLayout } from '@/components/Layout'
import { apiClient } from '@/lib/api'
import { useAuthContext } from '@/module/auth'

export const Assignment = ({ gameId }: { gameId: string }) => {
  const { idToken } = useAuthContext()
  const [player, setPlayer] = useState<GamePlayer | undefined>(undefined)

  useEffect(() => {
    void (async () => {
      const data = await apiClient({ idToken }).games._gameId_string(gameId).players.me.$get()
      console.log(data)
      setPlayer(data.player)
      setTimeout(async () => {
        await apiClient({ idToken }).games._gameId_string(gameId).health_check.$post()
      }, 6000)
    })()
  }, [gameId, idToken])
  const isFramer = useMemo(() => {
    return !!player?.isFramer
  }, [player])

  return (
    <MainLayout>
      <Wrap>
        {player && (
          <>
            <Text>
              <TextWithShadow size={'body2'} shadowWidth={3}>
                あなたは、
              </TextWithShadow>
            </Text>
            {isFramer ? (
              <Role isFramer={isFramer}>
                <TextWithShadow size={'xl'} shadowWidth={7}>
                  <span>フレイマー</span>
                </TextWithShadow>
              </Role>
            ) : (
              <Role isFramer={isFramer}>
                <TextWithShadow size={'xl'} shadowWidth={7}>
                  <span>ファインダー</span>
                </TextWithShadow>
              </Role>
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
  margin-top: -240px;
`

const Role = styled.div<{ isFramer: boolean }>`
  position: absolute;

  span {
    color: ${(props) =>
      props.isFramer ? props.theme.colors.primary.main : props.theme.colors.secondary.main};
  }
`
