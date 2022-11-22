import { peer } from '@/lib/skyway'

// peerIdはDBに持たせる
// peerIdとgameIdは同じ値にする

export const createRoom = async () => {
  const localStream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch((e) => {
    console.log(e)
  })
}
