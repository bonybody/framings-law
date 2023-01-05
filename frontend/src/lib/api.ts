import aspida from '@aspida/axios'
import Axios, { AxiosRequestHeaders } from 'axios'

import api from '@/api/$api'
import { API_SERVER } from '@/config'
import { User } from '@/module/auth'

const axiosInstance = Axios.create({
  baseURL: API_SERVER
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const message = error.response?.data?.message || error.message
    console.error(message)
    return Promise.reject(error)
  }
)

export type ApiClientOptions = Pick<User, 'idToken'> & {
  headers?: AxiosRequestHeaders
}

export const apiClient = ({ idToken, headers }: ApiClientOptions) => {
  return api(
    aspida(axiosInstance, {
      headers: {
        ...headers,
        accept: 'application/json',
        Authorization: `Bearer ${idToken}`
      }
    })
  )
}
