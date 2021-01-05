import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { fetchUserList } from 'services/api'
import User from 'models/user'

const name = 'contactList'

export const fetchContactList = createAsyncThunk(
  `${name}/fetchContactList`,
  async (params: any, thunkApi: any) => {
    const { response: res, error } = await fetchUserList()
    if (error) {
      alert('コンタクトリストの取得に失敗しました')
      return {}
    }
    const data = res!.data.results.reduce((acc: any, item: any) => {
      const user = new User(item)
      return { ...acc, [user.id]: user }
    }, {})
    return data
  }
)

const initialState = {
  data: {}
}

type State = typeof initialState

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [String(fetchContactList.fulfilled)]: (state: State, action: any) => {
      state.data = action.payload
    }
  }
})

export const contactListSelector = createSelector(
  (state: any) => {
    return state.domain.contactList
  },
  ({ data }: any) => Object.values(data)
)
export const createContactSelector = (id: string) => createSelector(
  (state: any) => {
    return state.domain.contactList
  },
  ({ data }: any): User => data[id]
)

export const {} = slice.actions

export default slice.reducer
