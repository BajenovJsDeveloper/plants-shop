import React from 'react'
import { Button, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../utils/colors'

export const SubmitButton = ({ title, submit, iconName, ...props }) => {
  return (
    <Button
      {...props}
      onPress={submit}
      rounded={50}
      bg={COLORS.main}
      mt={4}
      _pressed={{ opacity: 0.5 }}
      p={3}
      leftIcon={<Icon as={<MaterialIcons name={iconName} />} size="sm" />}
    >
      {title}
    </Button>
  )
}
