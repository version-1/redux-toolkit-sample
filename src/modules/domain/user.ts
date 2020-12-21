import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'TestUser',
  email: 'test@example.com'
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  }
})

export const {} = slice.actions

export default slice.reducer
