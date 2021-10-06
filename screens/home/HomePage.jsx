import React from 'react'
import { useDispatch } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { logout } from '../../store/user/userReducer'
import { Button, Center, Divider, Heading, Image, VStack } from 'native-base'
import { MainLayout } from '../../components/MainLayout'
import { COLORS } from '../../utils/colors'

const PlantIMG = require('../../images/plant3.jpg')
const LogoIMG = require('../../images/logo.png')

export function HomePage({ navigation }) {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const pressHandle = (screen) => {
    navigation.navigate(screen)
  }

  if (isFocused) dispatch(logout())

  return (
    <MainLayout bgImage={PlantIMG}>
      <VStack px={8}>
        <Center bg={COLORS.light} borderRadius="lg" mt={4}>
          <Image source={LogoIMG} size="lg" alt="logo" resizeMode="contain" />
        </Center>
        <Heading textAlign="center" fontSize={32} mt={8} color={COLORS.header}>
          AGWA Farm
        </Heading>
        <Divider bg={COLORS.light} w="100%" my={6} />
        <Button
          onPress={() => pressHandle('Login')}
          borderRadius="50"
          p={3}
          mt={4}
          bgColor={COLORS.main}
          _pressed={{ opacity: 0.5 }}
        >
          Login
        </Button>
        <Button
          onPress={() => pressHandle('Register')}
          borderRadius="50"
          p={3}
          mt={4}
          bgColor={COLORS.main}
          _pressed={{ opacity: 0.5 }}
        >
          Registrate
        </Button>
      </VStack>
    </MainLayout>
  )
}
