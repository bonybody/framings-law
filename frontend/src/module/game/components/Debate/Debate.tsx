/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

import { PostListToggleTab, PostListToggleTabProps } from '@/components/Elements'
import { MainLayout } from '@/components/Layout'
import { apiClient } from '@/lib/api'
import { useAuthContext } from '@/module/auth'

import { GameId } from '../../types'
import { DebateFinish } from '../DebateFinish'
import { PostCardList } from './PostCardList'
import { TimeRemaining } from './TimeRemaining'
import { UserList } from './UserList'

export type DebateProps = {
  gameId: GameId
  isFlamer: boolean
  timeLimit: string
}

export const Debate = ({ gameId, isFlamer, timeLimit }: DebateProps) => {
  const [tab, setTab] = useState<Required<PostListToggleTabProps['selectedTab']>>('all')
  const [time, setTime] = useState<number>(10000)
  const [isEnd, setIsEnd] = useState<boolean>(false)

  const { idToken } = useAuthContext()

  useEffect(() => {
    setInterval(() => {
      if (isEnd) return
      const now = new Date()
      const remainTime = new Date(timeLimit).getTime() - now.getTime()
      const sec = Math.floor(remainTime / 1000)
      setTime(sec)
      if (sec === 0) {
        setIsEnd(true)
        setTimeout(async () => {
          await apiClient({ idToken }).games._gameId_string(gameId.toString()).health_check.$post()
        }, 3000)
      }
    }, 1000)
  }, [])

  const handleTab: PostListToggleTabProps['handleTab'] = (selectedTab) => {
    if (!isFlamer) return
    setTab(selectedTab)
  }

  return (
    <>
      {isEnd && <DebateFinish />}
      {!isEnd && (
        <>
          <MainLayout>
            <Container>
              <TimeRemaining timeLimit={time} />
              <TabContainer>
                <PostListToggleTab isFlamer={isFlamer} selectedTab={tab} handleTab={handleTab} />
              </TabContainer>
              <PostCardList gameId={gameId} isFlamer={isFlamer} selectedTab={tab} />
              <UserListContainer>
                <UserList gameId={gameId} />
              </UserListContainer>
            </Container>
          </MainLayout>
        </>
      )}
    </>
  )
}

const Container = styled.div`
  padding: 0 16px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const TabContainer = styled.div`
  padding-top: 3vh;
`

const UserListContainer = styled.div`
  margin-top: auto;
  padding: 24px 0 16px 0;
`
