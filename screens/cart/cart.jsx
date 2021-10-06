import { Box, Divider, Heading, HStack, Image, Pressable, SlideFade, Text } from 'native-base'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainLayout } from '../../components/MainLayout'
import { Octicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import _ from 'underscore'
import { removeFromCart } from '../../store/user/userReducer'
import { countTotalPrice } from '../../utils/api'
import { SubmitButton } from '../../components/SubmitButton'

export function Cart({ navigation }) {
  const cartList = useSelector((state) => state.user.myCart)
  const dispatch = useDispatch()

  const totalToPay = useMemo(() => {
    return cartList.map((item) => item.item.price * item.count).reduce((acc, item) => item + acc, 0)
  }, [cartList])

  const isOrderHide = useMemo(() => {
    return totalToPay ? false : true
  }, [totalToPay])

  const editHandle = (item) => {}
  const removeHandle = (item) => {
    dispatch(removeFromCart(item))
  }
  return (
    <MainLayout>
      <Heading size="md" textAlign="center" color="teal.700">
        Your Order
      </Heading>
      {cartList.map((item) => {
        return <CartItem key={item.item.id} item={item} remove={removeHandle} edit={editHandle} />
      })}
      <OrderView total={countTotalPrice(totalToPay, 1)} disabled={isOrderHide} />
    </MainLayout>
  )
}

const CartItem = ({ item, edit, remove }) => {
  const [slide, setSlide] = useState(true)
  const removeHandle = () => {
    setSlide(false)
    setTimeout(() => remove(item), 300)
  }
  const editHandle = () => {
    edit(item)
  }
  return (
    <SlideFade in={slide} duration={300}>
      <Pressable p={2} rounded="md" mt={4} bg="white" key={item.item.id}>
        <Heading p={2} size="sm" bg="teal.600" color="white" borderRadius={6}>
          {item.item.title}
        </Heading>
        <HStack p={4}>
          <Image source={item.item.img} alt="Alternate Text" size="md" />
          <Divider mx={4} bg="blue.200" h="100%" orientation="vertical" />
          <Box bg="white" p={2}>
            <ItemDescription price={item.item.price} count={item.count} />
          </Box>
          <Box py={2} pl={8} flex={1} justifyContent="space-between">
            <RemoveButton remove={removeHandle} />
            <EditButton edit={() => editHandle(item)} />
          </Box>
        </HStack>
      </Pressable>
    </SlideFade>
  )
}

const RemoveButton = ({ remove }) => {
  return (
    <Pressable _pressed={{ opacity: 0.3 }} onPress={remove}>
      <Octicons name="trashcan" size={24} color="#f86565" />
    </Pressable>
  )
}

const EditButton = ({ edit }) => {
  return (
    <Pressable _pressed={{ opacity: 0.3 }} onPress={edit}>
      <MaterialIcons name="edit" size={24} color="#4d4d4dda" />
    </Pressable>
  )
}

const ItemDescription = ({ count, price }) => {
  return (
    <>
      <HStack>
        <Text>Quantity:</Text>
        <Text bg="teal.500" px={2} ml={4} rounded="md" fontSize={16} color="white">
          {count}
        </Text>
      </HStack>
      <Text>Price: ${price}</Text>
      <Text fontWeight="bold" fontSize="md">
        Total: ${countTotalPrice(price, count)}
      </Text>
    </>
  )
}

const OrderView = ({ total, disabled }) => {
  return (
    <Box rounded="md" p={4} mt={4} bg="white">
      {disabled ? (
        <Text textAlign="center" fontSize="lg" color="gray.600">
          Cart is empty.
        </Text>
      ) : (
        <HStack alignItems="center">
          <Text fontSize={16} color="gray.600">
            Total for Pay:{' '}
          </Text>
          <Text fontSize={18} fontWeight="bold" color="teal.500" ml={4}>
            $ {total}
          </Text>
        </HStack>
      )}
      <SubmitButton isDisabled={disabled} title="Submit Order" iconName="done" />
    </Box>
  )
}
