import axios from 'axios'
import { storage } from '@/utils/index'

const AxiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL as string
})

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = storage.getToken()
    config.headers['Content-Type'] = 'application/json'
    config.headers.Authorization = 'Bearer ' + token
    return config
}, (error) => Promise.reject(error))

AxiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response) {
        return error.response
      }
    }
  )

  export default AxiosInstance
