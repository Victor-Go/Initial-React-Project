import { combineReducers } from 'redux'
import { userInfoReducer } from '@src/stores/userInfo/userInfoStore'

export default combineReducers({
  userInfo: userInfoReducer
})
