import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal/modalReducer'
import userReducer from './user/userReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
})
