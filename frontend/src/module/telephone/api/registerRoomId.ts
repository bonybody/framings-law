type RegisterRoomIdOptions = {
  roomId: string
}

export const registerRoomId = async ({ roomId }: RegisterRoomIdOptions) => {
  await Promise.resolve(() => {
    console.log(roomId)
  })
}
