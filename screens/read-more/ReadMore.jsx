import { Box, Button, Center, Divider, Heading, Image, Text } from 'native-base'
import React from 'react'
import { MainLayout } from '../../components/MainLayout'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/user/userReducer';
import { showModal } from '../../store/modal/modalReducer';

export default function ReadMore({ route }) {
  const item = route.params
  const { img, title, description, price } = item
  const dispatch = useDispatch()

  const submit = () => {
    dispatch(addToCart(item))
  }

  const handlePress = () => {
    const about = `Your choise is: ${title}, price: \$${price}`
    dispatch(showModal({ title: 'New product', about }))
  }

  return (
    <MainLayout submit={submit}>
      <Center>
        <Box bg="white" p={4} w="100%" borderRadius={8}>
          <Center py={2}>
            <Image source={img} alt="Alternate Text" size="2xl"/>
          </Center>
          <Divider my={2} orientation="horizontal" bg="#c9c9c9c0" w="100%"/>
          <Heading>{title}</Heading>
          <Center>
            <MaterialIcons name="info-outline" size={32} color="pink" />
          </Center>
          {description.map((text, idx) => (<Text key={`plant-${idx}`} fontStyle="italic">{idx +1}. {text}</Text>))}
          <Text pt={8} fontWeight="bold" fontSize="lg">Price:
            <Text fontSize="xl" color="teal.500"> ${price}</Text>
          </Text>
          <Button 
            borderRadius={50} 
            mt={8} 
            p={3} 
            bg="emerald.600" 
            _pressed={{ opacity: 0.3 }}
            onPress={handlePress}
          >GET it NOW</Button>
        </Box>
      </Center>
    </MainLayout>
  )
}