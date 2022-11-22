import aspida from '@aspida/axios'
import Axios from 'axios'

import { API_SERVER } from '@/config'
// import api from '@/api/$api'
// import { getAccountStorage } from '@/features/auth'

const axiosInstance = Axios.create({
  baseURL: API_SERVER
})

axiosInstance.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  (response) => response,
  (error) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const message = error.response?.data?.message || error.message
    console.error(message)
    return Promise.reject(error)
  }
)
