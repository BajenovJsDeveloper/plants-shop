import React from "react"
import { Box, Button, Center, Divider, HStack, Image, Text } from "native-base"
import { EvilIcons } from '@expo/vector-icons';


export const Card = ({ data, linkClick }) => {
  const { title, img } = data
  const text = data.short? data.short : 'No description yet.'

  return (
    <Box mb={4} p={2} bg="white" borderRadius={8} w={{ base: "100%"}}>
      <Center py={2}>
        <Image source={img} alt="Alternate Text" size="2xl"/>
      </Center>
      <Divider my={2} orientation="horizontal" bg="#c9c9c9c0" w="100%"/>
      <Center p={2}>
        <Text fontSize="lg" color="black">{title}</Text>
        <Text fontSize="sm" color="gray.600">{text}</Text>
      </Center >
      <Button variant="outline" p={2} rounded="3xl" onPress={() =>linkClick(data)} _pressed={{ opacity: 0.5 }}>
        <HStack>
          <Text color="teal.700"> Read more </Text>
          <EvilIcons name="arrow-right" size={32} color="#1f805f"/>
        </HStack>
      </Button>
    </Box>
  )
}