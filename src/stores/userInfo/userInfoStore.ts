import { createSlice } from '@reduxjs/toolkit'
import { UserInfo } from '@src/types/user'

export type UserInfoState = UserInfo;

const initialState: UserInfoState = {
  email: ''
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email
    },
    clearUserInfo: () => initialState
  }
})

const { reducer } = userInfoSlice
const { setUserInfo, clearUserInfo } = userInfoSlice.actions
export {
  userInfoSlice,
  reducer as userInfoReducer,
  setUserInfo,
  clearUserInfo
}
