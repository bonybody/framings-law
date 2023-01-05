import { apiClient, ApiClientOptions } from '@/lib/api'

export const getCreateRoom = async (idToken: ApiClientOptions['idToken']) => {
  const res = await apiClient({ idToken: idToken }).rooms.$post()
  console.log(res)
  return res
}
