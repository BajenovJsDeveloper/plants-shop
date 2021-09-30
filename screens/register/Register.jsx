import React, { useEffect, useState } from 'react'
import { Stack, Box, Heading, VStack } from "native-base"
import { InitialRegisterFormData } from '../../utils/formsData'
import { registerRuls, validate } from '../../utils/validator'
import { InputContainer } from '../../components/InputContainer'
import { SubmitButton } from '../../components/SubmitButton'
import { MainLayout } from '../../components/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister } from '../../store/user/userReducer'

const PlantIMG = require("../../images/plant.jpg")

export const Register = ({ navigation }) => {
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(InitialRegisterFormData())

  const input = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: { ...prev[field], value } }))
      }

  const submitForm = () => {
    const [validateResult, isValid] = validate(formData, registerRuls)
    setFormData(validateResult)
    if (isValid) {
      dispatch(fetchRegister({ 
        email: formData.email.value,
        username: formData.name.value,
        password: formData.password.value
      }))
    } else {

    }
  }

  useEffect(() => {
    if (token) navigation.navigate("User")
  }, [token])

  return (
    <MainLayout bgImage={PlantIMG}>
      <Box bg="trueGray.50" p={4} borderRadius={8}>
        <VStack alignItems="center">
          <Heading textAlign="center" mb="10" color="teal.600">
            Registartion Form
          </Heading>
          <Stack space={2} w={{ base: "100%" }}>
            <InputContainer data={formData.name} input={input}/>
            <InputContainer data={formData.email} input={input}/>
            <InputContainer data={formData.password} input={input}/>
            <InputContainer data={formData.repassword} input={input}/>
            <SubmitButton submit={submitForm} title="Registrate" iconName="how-to-reg"/>
          </Stack>
        </VStack>
      </Box>
    </MainLayout>
  )
}
