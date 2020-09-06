import { combineReducers } from 'redux'
import { usersReducer } from './usersReducer'
import { editableCellReducer } from './editableCellReducer'

export const rootReducer = combineReducers({
  users: usersReducer,
  editing: editableCellReducer
})
