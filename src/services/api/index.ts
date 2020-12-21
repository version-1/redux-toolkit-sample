import axios from 'axios'

const client = axios.create({
  baseURL: 'https://randomuser.me/api'
})

export const fetchUser = async (key: string) => {
  return await client.get(`/?key=${key}`)
}

export const fetchUserList = async () => {
  return await client.get('/?results=25')
}
