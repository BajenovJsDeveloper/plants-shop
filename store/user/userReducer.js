import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BaseUrl = 'http://192.168.100.50:3300'
const HEADERS = { 'Content-Type': 'application/json' }

export const STATUS = {
  loading: 'loading',
  ready: 'ready',
}

const delayFetch = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), 1000)
  })

const createConfig = (method = 'GET', path = '', data) => {
  return {
    url: BaseUrl + path,
    method,
    data,
    headers: HEADERS,
  }
}

export const fetchLogin = createAsyncThunk('user/login', async (data) => {
  const config = createConfig('POST', '/login', data)

  await delayFetch()
  const response = await axios(config)
  return {
    username: response.data.username,
    token: response.data.token,
  }
})

export const fetchRegister = createAsyncThunk('user/register', async (data) => {
  const config = createConfig('POST', '/signin', data)

  await delayFetch()
  const response = await axios(config)
  return {
    username: response.data.username,
    token: response.data.token,
  }
})

export const userReducer = createSlice({
  name: 'user',
  initialState: {
    form: null,
    token: null,
    status: STATUS.ready,
    username: '',
    errMessage: null,
    myCart: [],
  },
  reducers: {
    login: (state, action) => {
      state.form = action.payload
    },
    logout: (state, action) => {
      state.token = null
    },
    resetToast: (state, action) => {
      state.errMessage = null
    },
    addToCart: (state, action) => {
      const lastItem = state.myCart.find((item) => item.item.id === action.payload.item.id)
      if (lastItem) {
        lastItem.count += action.payload.count
        return
      }
      state.myCart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.myCart = state.myCart.filter((item) => item.item.id !== action.payload.item.id)
      console.log('Cart:', state.myCart)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.token = action.payload.token
        state.username = action.payload.username
        console.log('GOOD!', action.payload)
        state.status = STATUS.ready
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        console.log('Error ready', action.error.message)
        state.status = STATUS.ready
        state.errMessage = 'Error User login!'
      })
      .addCase(fetchLogin.pending, (state, action) => {
        state.status = STATUS.loading
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.token = action.payload.token
        state.username = action.payload.username
        state.status = STATUS.ready
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.status = STATUS.ready
      })
      .addCase(fetchRegister.pending, (state, action) => {
        state.status = STATUS.loading
      })
  },
})

export const { login, logout, resetToast, addToCart, removeFromCart } = userReducer.actions
export default userReducer.reducer
