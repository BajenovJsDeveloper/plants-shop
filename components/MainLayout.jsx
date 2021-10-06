import { Box, Center, Image, ScrollView, VStack } from 'native-base'
import React from 'react'
import PlantBG from '../images/plant3.jpg'
import { ModalWindow } from './ModalWindow'

export function MainLayout({ children, bgImage = PlantBG, submit, cancel }) {
  return (
    <Center flex={1} w={{ base: '100%' }} position="relative">
      {bgImage && (
        <Box width="100%" height="100%" width="100%" position="absolute" top="0" bottom="0">
          <Center flex={1} opacity={0.3}>
            <Image source={bgImage} alt="font" resizeMode="cover" />
          </Center>
        </Box>
      )}
      <ModalWindow submit={submit} cancel={cancel} />
      <ScrollView w={{ base: '100%' }} flex={1}>
        <VStack p={4} flex={1} w={{ base: '100%' }}>
          {children}
        </VStack>
      </ScrollView>
    </Center>
  )
}
