import axios, { Method, AxiosResponse } from 'axios'

const client = axios.create({
  baseURL: 'https://randomuser.me/api'
})

let defaultErrorHandler = (error: Error) => alert(error.message)

interface RequestConfig {
   url: string
   method: Method
   data?: any
   params?: any
   isCustomErrorHandle?: boolean
}

interface Response {
  response?: AxiosResponse
  error?: Error
}

const request = async (config: RequestConfig): Promise<Response> => {
  try {
    return { response: await client.request(config) }
  } catch (error) {
    if (defaultErrorHandler && !config.isCustomErrorHandle) {
      defaultErrorHandler(error)
    }
    return { error }
  }
}

export const setDefaultErrorHandler = (handler: (error: Error) => void) => {
  defaultErrorHandler = handler
}

export const fetchUser = async (key: string) => {
  return await request({
    url: `/?key=${key}`,
    method: 'get',
    isCustomErrorHandle: true
  })
}

export const fetchUserList = async () => {
  return await request({
    url: `/?results=25`,
    method: 'get',
    isCustomErrorHandle: true
  })
}
