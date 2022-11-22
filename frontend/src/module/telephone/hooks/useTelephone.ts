import { useCallback, useRef, useState } from 'react'

import { peer } from '@/lib/skyway'

import { registerRoomId } from '../api/registerRoomId'

type UseTelephoneOptions = {
  gameId: string
}

export const useTelephone = ({ gameId }: UseTelephoneOptions) => {
  const [isError, setIsError] = useState<boolean>(false)
  const [localStream, setLocalStream] = useState<MediaStream>()
  // const audioRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  // const [audioStream, setAudioStream] = useState()

  const id = Math.trunc(Math.random() * (10 + 1 - 0)) + 0
  //TURNサーバーを強制
  const initPeer = () =>
    peer(`peerId${id}`, {
      config: { iceTransportPolicy: 'relay' }
    })

  const setAudioRef = useCallback(async () => {
    const _localStream = await navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .catch((e) => {
        console.log(e)
        setIsError(true)
      })

    if (!_localStream) return setIsError(true)

    setLocalStream(_localStream)

    if (!audioRef.current) return
    audioRef.current.srcObject = _localStream
  }, [])

  const createRoom = async () => {
    const peerClient = initPeer()
    await setAudioRef()

    peerClient.on('open', async (stream) => {
      console.log(stream)
      await registerRoomId({ roomId: peerClient.id })
    })
  }

  // これjoinRoomだけで良くね？
  const joinRoom = async () => {
    const peerClient = initPeer()
    await setAudioRef()

    peerClient.on('open', (stream) => {
      console.log(stream)
      const meshRoom = peerClient.joinRoom(gameId, {
        mode: 'mesh',
        stream: localStream,
        audioReceiveEnabled: true
      })

      meshRoom.on('open', () => {
        console.log('meshRoom open')
      })

      meshRoom.on('peerJoin', () => {
        console.log('join room')
      })

      meshRoom.on('stream', (stream) => {
        if (!audioRef.current) return
        console.log(stream.getAudioTracks())
        setLocalStream(stream)
        audioRef.current.srcObject = stream
      })
    })
  }

  return {
    isError,
    audioRef,
    createRoom,
    joinRoom
  }
}
