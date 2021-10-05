import React from "react"
import { Navigation } from './screens/Navigation'
import { Center, NativeBaseProvider, Spinner, VStack } from "native-base"
import { Provider, useSelector } from 'react-redux'
import { store } from './store/store'
import { STATUS } from "./store/user/userReducer"

export default function App() {
  return (
      <Provider store={store}>
        <NativeBaseProvider>
          <VStack flex={1} position="relative">
            <Loader/>
            <Navigation />
          </VStack>
        </NativeBaseProvider>
      </Provider>
  )
}

const Loader = () => {
  const loading = useSelector(state => state.user.status === STATUS.loading ? true : false)
  if (!loading) return null
  return (
      <VStack position="absolute" top={0} bottom={0} left={0} width="100%" zIndex={100}>
        <Center bg="#ffffffcc" flex={1} >
          <Spinner size="lg"/>
        </Center>
      </VStack>
  )
}


