import { Center, Text } from "native-base"
import React from "react"

export const HeaderBar = ({ title, color = 'black' }) => {
  return (
    <Center>
      <Text numberOfLines={1} fontWeight="bold" color={color}>{title}</Text>
    </Center>
  )
}
