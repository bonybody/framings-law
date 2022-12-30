// import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'

// import { useForm } from 'react-hook-form'
import { GameResult } from '@/module/components/GameResult'

// import {
//   Button,
//   CharacterDiamondShape,
//   DiamondShape,
//   PostCard,
//   WaitingDiamondShape
// } from '@/components/Elements'
// import { InputField } from '@/components/Form'
// import { MainLayout } from '@/components/Layout'

const Home: NextPage = () => {
  // const { register } = useForm()
  // const theme = useTheme()
  return (
    <Main>
      <GameResult />
    </Main>
  )
}

export default Home

const Main = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

// const Headline2 = styled.h2`
//   margin: 0;
//   padding: 16px 0;
// `
