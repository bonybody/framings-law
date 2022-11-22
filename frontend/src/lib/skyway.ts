import Peer, { PeerConstructorOption } from 'skyway-js'

import { SKY_WAY_API_KEY } from '@/config'

export const peer = (peerId: string, options?: Omit<PeerConstructorOption, 'key' | 'debug'>) =>
  new Peer(peerId, { key: SKY_WAY_API_KEY, debug: 3, ...options }) // debug:3 開発モード

export const setupMeshRoom = async () => {
  const localStream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch((e) => {
    console.log(e)
  })

  if (!localStream) return

  const peerClient = peer('hogePeer', { config: { iceTransportPolicy: 'relay' } }) // TURNサーバーを強制

  peerClient.on('open', (stream) => {
    console.log(stream)
    console.log(peerClient.open, 'host: ' + peerClient.id)

    const meshRoom = peerClient.joinRoom('roomName', {
      mode: 'mesh',
      stream: localStream,
      audioReceiveEnabled: true
    })

    meshRoom.on('open', () => {
      console.log('meshRoom open host')
    })

    meshRoom.on('stream', () => {
      console.log('on stream')
    })

    meshRoom.on('peerJoin', (peerId) => {
      console.log('joinedRoom: ' + peerId)
    })

    meshRoom.on('close', () => {
      console.log('close')
    })

    meshRoom.on('error', (e) => {
      console.log(e)
    })
  })
}

export const joinMeshRoom = async () => {
  const localStream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch((e) => {
    console.log(e)
  })

  if (!localStream) return

  const peerClient = peer('hogePeer', { config: { iceTransportPolicy: 'relay' } }) // TURNサーバーを強制

  peerClient.on('open', (stream) => {
    console.log(stream)
    console.log(peerClient.open, 'guest: ' + peerClient.id)

    const meshRoom = peerClient.joinRoom('roomName', {
      mode: 'mesh',
      stream: localStream,
      audioReceiveEnabled: true
    })

    meshRoom.on('open', () => {
      console.log('meshRoom open guest')
    })
  })
}
