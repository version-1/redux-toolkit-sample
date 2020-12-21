import { combineReducers } from 'redux'
import contactList from 'modules/domain/contactList'
import user from 'modules/domain/user'

const Reducers = combineReducers({
  user,
  contactList
})

export default Reducers
