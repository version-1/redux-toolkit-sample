import { createSlice, createSelector } from '@reduxjs/toolkit'
import User from 'models/user'

const initialState = new User({
  login: { uuid: '8e1687c5-505e-4329-ae9d-935533c720ca' },
  email: 'test@example.com',
  name: {
    first: 'test',
    name: 'user'
  },
  gender: 'unknown',
  picture: {},
  location: {}
})

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export const userSelector = createSelector(
  (state: any) => {
    return state.domain.user
  },
  (user: any) => user
)
export const {} = slice.actions

export default slice.reducer
