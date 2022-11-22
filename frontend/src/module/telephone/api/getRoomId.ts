type RegisterRoomIdOptions = {
  roomId: string
}
// たぶんいらん
export const getRoomId = async ({ roomId }: RegisterRoomIdOptions) => {
  await Promise.resolve(() => {
    console.log(roomId)
  })
}
