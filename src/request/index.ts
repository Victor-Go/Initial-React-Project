import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { hideLoading, showLoading } from './loading'
import { showAlert } from './alert'

export const createAxiosByInterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    timeout: 30000,
    withCredentials: true,
    ...config
  })

  instance.interceptors.request.use(
    (config: any) => {
      showLoading()

      return config
    },
    (error: any) => {
      hideLoading()
      showAlert('Error', error)
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response: any) => {
      hideLoading()
      const { code, data, message } = response.data
      if (code === 200) {
        return data
      } else if (code === 401) {
        // TODO: Clear state and navigate to login
      } else {
        showAlert('Error', message)
        return Promise.reject(response.data)
      }
    },
    (error: any) => {
      hideLoading()
      console.log('error-response', error.response)
      console.log('error-config', error.config)
      console.log('error-request', error.request)

      if (error.response?.status === 401) {
        // TODO: Clear state and navigate to login
      }
      showAlert('Error', error)
      return Promise.reject(error)
    }
  )

  return instance
}

const request = createAxiosByInterceptors({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? '/api'
      : import.meta.env.VITE_BASE_URL
})

export default request
