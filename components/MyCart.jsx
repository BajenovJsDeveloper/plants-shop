import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Box, Button, Center, Text } from 'native-base'
import { useSelector } from 'react-redux'
import { COLORS } from '../utils/colors'

export const MyCart = ({ navigation }) => {
  const myCart = useSelector((state) => state.user.myCart.length)

  const handleClick = () => {
    navigation.navigate('Cart')
  }
  return (
    <Button p={0} borderRadius={50} _pressed={{ opacity: 0.3 }} variant="unstyled" onPress={handleClick}>
      <Box borderColor="black" position="relative" w={20} bottom={1}>
        <Center>
          <Center bg="teal.500" p={1.5} borderRadius={50}>
            <Ionicons name="cart-outline" size={32} color="white" />
          </Center>
          <Text
            position="absolute"
            color="white"
            fontSize={12}
            bottom={-8}
            bg={COLORS.danger}
            borderRadius={50}
            px={1.5}
            borderColor="white"
            borderWidth={1}
          >
            {myCart}
          </Text>
        </Center>
      </Box>
    </Button>
  )
}
