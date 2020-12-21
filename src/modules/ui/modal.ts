import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  content: []
}

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show(state: any, action: any) {
      state.show = true
      state.content.push(action.payload.content)
    },
    hide(state: any, action: any) {
      state.show = false
      state.content.pop()
    }
  }
})

export const { show, hide } = slice.actions

export default slice.reducer
