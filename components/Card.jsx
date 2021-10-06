import React from 'react'
import { Box, Button, Center, Divider, HStack, Image, Text } from 'native-base'
import { EvilIcons } from '@expo/vector-icons'
import { COLORS } from '../utils/colors'

export const Card = ({ data, linkClick }) => {
  const { title, img } = data
  const text = data.short ? data.short : 'No description yet.'

  return (
    <Box mb={4} p={2} bg={COLORS.light} borderRadius={8} w={{ base: '100%' }}>
      <Center py={2}>
        <Image source={img} alt="Alternate Text" size="2xl" />
      </Center>
      <Divider my={2} orientation="horizontal" bg={COLORS.muted} w="100%" />
      <Center p={2}>
        <Text fontSize="lg" color={COLORS.text}>
          {title}
        </Text>
        <Text fontSize="sm" color={COLORS.textLight}>
          {text}
        </Text>
      </Center>
      <Button
        variant="outline"
        p={2}
        rounded="3xl"
        onPress={() => linkClick(data)}
        _pressed={{ opacity: 0.5 }}
        rightIcon={<EvilIcons name="arrow-right" size={32} color={COLORS.iconMain} />}
      >
        <Text color={COLORS.main}> Read more </Text>
      </Button>
    </Box>
  )
}
