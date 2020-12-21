import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'contactList',
  initialState: {
    list: {}
  },
  reducers: {
    fetchSuccess (state: any, action: any) {

    }
  }
})

export const { fetchSuccess } = slice.actions

export default slice.reducer
