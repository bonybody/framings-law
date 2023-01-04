import { apiClient } from '@/lib/api'

export const getJoinRoom = async (uid: string, roomId: string) => {
  const res = await apiClient({ uid: uid }).rooms._roomId(roomId).joins.$post()
  console.log(res)
  return res
}
