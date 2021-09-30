import React from "react"
import { Button, Center, Divider, HStack, Image, Text } from "native-base"
import { EvilIcons } from '@expo/vector-icons';


export const Card = ({ data, linkClick }) => {
  const { title, img } = data
  const text = data.description.length > 0 ? data.description[0] : 'No description yet.'

  return (
    <Button mb={4} p={2} bg="info.50" borderRadius={8} w={{ base: "100%"}} _pressed={{ opacity: 0.5, backgroundColor: "gray.400" }}>
      <Center py={2}>
        <Image source={img} alt="Alternate Text" size="2xl"/>
      </Center>
      <Divider my={2} orientation="horizontal" bg="#c9c9c9c0" w="100%"/>
      <Center p={2}>
        <Text fontSize="lg" color="black">{title}</Text>
        <Text fontSize="sm" color="gray.600">{text}</Text>
      </Center >
      <Button variant="link" p={2} onPress={() =>linkClick(data)} _pressed={{ opacity: 0.5 }}>
        <HStack>
          <Text color="info.400"> Read more </Text>
          <EvilIcons name="arrow-right" size={32} color="#46cdf7"/>
        </HStack>
      </Button>
    </Button>
  )
}