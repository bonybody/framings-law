import styled from '@emotion/styled'

import { useTelephone } from '../hooks/useTelephone'

export type TelephoneProps = {
  //
}

export const Telephone = ({}: TelephoneProps) => {
  const { audioRef, joinRoom } = useTelephone({ gameId: 'gameId' })
  return (
    <>
      <div>Telephone</div>
      <button onClick={joinRoom}>joinRoom</button>
      {/* <Video ref={audioRef} /> */}
      <audio autoPlay ref={audioRef}></audio>
    </>
  )
}
