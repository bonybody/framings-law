import { apiClient } from '@/lib/api'

export const getCreateRoom = async (uid: string) => {
  const res = await apiClient({ uid: uid }).rooms.$post()
  console.log(res)
  return res
}
