import { createSlice } from '@reduxjs/toolkit'

export const modalReducer = createSlice({
  name: 'modal',
  initialState: {
    isShow: false,
    result: null,
    data: {
      title: 'Modal',
      about: ['Something about...'],
      type: null,
    },
  },
  reducers: {
    showModal: (state, action) => {
      state.isShow = true
      action.payload ? (state.data = { ...state.data, ...action.payload }) : null
    },
    hideModal: (state, action) => {
      state.isShow = false
      state.result = action.payload
    },
    initModal: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { showModal, hideModal, initModal } = modalReducer.actions
export default modalReducer.reducer
