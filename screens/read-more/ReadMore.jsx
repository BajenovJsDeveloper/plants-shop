import { Box, Button, Center, Divider, Heading, HStack, Image, Text } from 'native-base'
import React, { useMemo, useState } from 'react'
import { MainLayout } from '../../components/MainLayout'
import { MaterialIcons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/user/userReducer'
import { showModal } from '../../store/modal/modalReducer'
import { countTotalPrice } from '../../utils/api'
import { COLORS } from '../../utils/colors'

export default function ReadMore({ route, navigation }) {
  const item = route.params
  const { img, title, description, price, quantity } = item
  const [count, setCount] = useState(1)
  const dispatch = useDispatch()

  const submit = () => {
    dispatch(addToCart({ item, count }))
    setCount(1)
  }

  const handlePress = () => {
    const about = [`Your choise is: ${title},`, `Price: \$ ${price},`, `Total: \$ ${countTotalPrice(price, count)}`]
    dispatch(showModal({ title: 'Add to cart', about }))
  }

  const incraseHandle = () => {
    setCount((prev) => prev + 1)
  }

  const decraseHandle = () => {
    setCount((prev) => prev - 1)
  }

  const isMore = useMemo(() => {
    return quantity <= count
  }, [count])
  const isLess = useMemo(() => {
    return count === 1
  }, [count])

  return (
    <MainLayout submit={submit}>
      <Center p={4}>
        <Box bg="white" p={4} w="100%" borderRadius={8}>
          <Center py={2}>
            <Image source={img} alt="Alternate Text" size="2xl" />
          </Center>
          <Divider my={2} orientation="horizontal" bg={COLORS.muted} w="100%" />
          <Heading textAlign="center">{title}</Heading>
          <Center my={2}>
            <MaterialIcons name="info-outline" size={32} color={COLORS.warning} />
          </Center>
          {description.map((text, idx) => (
            <Text key={`plant-${idx}`} fontStyle="italic">
              {idx + 1}. {text}
            </Text>
          ))}
          <Text mt={6} fontWeight="bold">
            Quantity: {quantity}
          </Text>
          <HStack pt={2}>
            <Center mr={4}>
              <Text fontWeight="bold">Total:</Text>
            </Center>
            <Button isDisabled={isMore} variant="unstyled" _pressed={{ opacity: 0.3 }} p={1} onPress={incraseHandle}>
              <MaterialIcons name="add-circle-outline" size={36} color={COLORS.iconMain} />
            </Button>
            <Center>
              <Text textAlign="center" fontSize={26} mx={4} w={8}>
                {count}
              </Text>
            </Center>
            <Button isDisabled={isLess} variant="unstyled" _pressed={{ opacity: 0.3 }} p={1} onPress={decraseHandle}>
              <MaterialIcons name="remove-circle-outline" size={36} color={COLORS.iconMain} />
            </Button>
          </HStack>
          <Text pt={4} fontWeight="bold" fontSize="lg">
            Price:
            <Text fontSize="xl" color={COLORS.main}>
              {' '}
              $ {price}
            </Text>
          </Text>
          <Button borderRadius={50} mt={8} p={3} bg={COLORS.main} _pressed={{ opacity: 0.3 }} onPress={handlePress}>
            GET it NOW
          </Button>
        </Box>
      </Center>
    </MainLayout>
  )
}
