import React, { useEffect, useState } from 'react'
import { Box, Heading, Stack, useToast, VStack } from 'native-base'
import { InputContainer } from '../../components/InputContainer'
import { SubmitButton } from '../../components/SubmitButton'
import { InitialLoginFormData } from '../../utils/formsData'
import { loginRules, validate } from '../../utils/validator'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLogin, resetToast } from '../../store/user/userReducer'
import { MainLayout } from '../../components/MainLayout'
import { COLORS } from '../../utils/colors'

export function Login({ navigation }) {
  const [formData, setFormData] = useState(InitialLoginFormData())
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const toast = useToast()
  const toastMessage = useSelector((state) => state.user.errMessage)

  const input = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: { ...prev[field], value } }))
  }

  const submitForm = () => {
    const [validateResult, isValid] = validate(formData, loginRules)
    setFormData(validateResult)
    if (isValid) {
      dispatch(
        fetchLogin({
          email: formData.email.value,
          password: formData.password.value,
        })
      )
    } else {
    }
  }

  useEffect(() => {
    if (token) {
      navigation.navigate('User')
    }
    console.log('token: ', token)
  }, [token])

  useEffect(() => {
    if (toastMessage !== null) {
      toast.show({
        id: 'err',
        title: toastMessage,
        status: 'danger',
        isClosable: false,
        onCloseComplete: () => dispatch(resetToast()),
      })
      setFormData((prev) => ({
        ...prev,
        password: { ...prev.password, value: '' },
        email: { ...prev.email, errmsg: toastMessage },
      }))
    }
  }, [toastMessage])

  return (
    <MainLayout>
      <Box bg={COLORS.light} p={4} borderRadius={8}>
        <VStack alignItems="center">
          <Heading textAlign="center" mb="10" color="teal.600">
            Login Form
          </Heading>
          <Stack space={2} w={{ base: '100%' }}>
            <InputContainer data={formData.email} input={input} />
            <InputContainer data={formData.password} input={input} />
            <SubmitButton submit={submitForm} title="Login" iconName="login" />
          </Stack>
        </VStack>
      </Box>
    </MainLayout>
  )
}
