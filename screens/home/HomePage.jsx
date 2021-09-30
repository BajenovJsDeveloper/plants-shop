import React from "react"
import { useDispatch } from "react-redux"
import { useIsFocused } from '@react-navigation/native'
import { logout } from '../../store/user/userReducer'
import { Button, Heading } from "native-base"
import { MainLayout } from "../../components/MainLayout"

const PlantIMG = require("../../images/plant3.jpg")

export function HomePage({ navigation }) {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const pressHandle = (screen) => {
    navigation.navigate(screen)
  }

  if(isFocused) dispatch(logout())

  return (
    <MainLayout bgImage={PlantIMG}>
      <Heading textAlign="center" fontSize={36} mt="10" color="cyan.600">AGW Farm</Heading>
      <Button onPress={() => pressHandle("Login")} borderRadius="50" p={3} mb={4} mt={8} bgColor="emerald.600" _pressed={{ opacity: 0.5 }}>Login</Button>
      <Button onPress={() => pressHandle("Register")} borderRadius="50" p={3} mb={4} bgColor="emerald.600" _pressed={{ opacity: 0.5 }}>Registrate</Button>
    </MainLayout>
  )
}
