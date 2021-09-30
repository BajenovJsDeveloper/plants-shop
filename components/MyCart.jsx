import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Box, Button, Center, HStack, Text } from 'native-base';
import { useSelector } from 'react-redux';


export const MyCart = () => {
  const myCart = useSelector(state => state.user.myCart.length)
  return (
    <Button p={0} borderRadius={50} _pressed={{ opacity: 0.3 }} variant="unstyled">
      <Box borderColor="black" position="relative" w={20} bottom={1}>
        <Center>
            <Center bg="teal.500" p={1.5} borderRadius={50} >
              <Ionicons name="cart-outline" size={32} color="white"/>
            </Center>
        <Text 
          position="absolute" 
          color="white" 
          fontSize={12} 
          bottom={-8} 
          bg="red.500" 
          borderRadius={50} 
          px={1.5}
          borderColor="white"
          borderWidth={1}
        >{myCart}</Text>
        </Center>
      </Box>
    </Button>
  )
}