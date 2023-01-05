import { apiClient, ApiClientOptions } from '@/lib/api'

export const getJoinRoom = async (idToken: ApiClientOptions['idToken'], roomId: string) => {
  const res = await apiClient({ idToken: idToken }).rooms._roomId(roomId).joins.$post()
  console.log(res)
  return res
}
