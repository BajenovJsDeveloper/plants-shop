import React, { useState } from 'react'
import { FormControl, Icon, Input, WarningOutlineIcon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../utils/colors'

const IconInput = ({ iconName, onShow, isPassShow }) => {
  return (
    <Icon
      as={<MaterialIcons name={iconName} />}
      size={8}
      mr="2"
      color={isPassShow ? COLORS.active : COLORS.muted}
      onPress={onShow}
    />
  )
}

export const InputContainer = ({ data, input }) => {
  const { title, placeholder, errmsg, icon, activeIcon, value, name, isPassword } = data
  const [isPassShow, setPasShow] = useState(false)
  const isInvalid = errmsg ? true : false

  const handleShow = () => {
    if (isPassword) setPasShow((prev) => !prev)
  }

  return (
    <FormControl w={{ base: '100%' }} isInvalid={isInvalid}>
      <FormControl.Label>{title}</FormControl.Label>
      <Input
        type={isPassword && !isPassShow ? 'password' : 'text'}
        onChangeText={(value) => input(name, value)}
        variant="rounded"
        value={value}
        placeholder={placeholder}
        borderColor={COLORS.main}
        InputRightElement={
          <IconInput iconName={isPassShow ? activeIcon : icon} onShow={handleShow} isPassShow={isPassShow} />
        }
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errmsg}</FormControl.ErrorMessage>
    </FormControl>
  )
}
