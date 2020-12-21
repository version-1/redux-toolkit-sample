import { combineReducers } from 'redux'
import ui from 'modules/ui'
import domain from 'modules/domain'

import { configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
  ui,
  domain
})

const store = configureStore({
  reducer
})

export default store
