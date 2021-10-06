import { Box, Button, Center, Heading, Modal, Text } from 'native-base'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../store/modal/modalReducer'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../utils/colors'

export const ModalWindow = ({ submit, cancel }) => {
  const { title, about, type } = useSelector((state) => state.modal.data)
  const isOpen = useSelector((state) => state.modal.isShow)
  const dispatch = useDispatch()
  const closeHandle = (state) => {
    dispatch(hideModal(state))
    if (state && submit) submit()
    if (!state && cancel) cancel()
  }

  return (
    <Modal isOpen={isOpen} onClose={closeHandle} closeOnOverlayClick={false}>
      <Modal.Content>
        <Modal.Header>
          <Heading color={COLORS.header}>{title}</Heading>
        </Modal.Header>
        <Modal.Body>
          <Center mb={4}>
            <Box bg={COLORS.muted} p={2} borderRadius={50}>
              <MaterialIcons name="done" size={40} color={COLORS.iconMain} />
            </Box>
          </Center>
          {about.map((text) => (
            <Text key={text}>{text}</Text>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button.Group variant="unstyled" space={2}>
            <Button
              borderRadius={50}
              onPress={() => closeHandle(false)}
              colorScheme="secondary"
              _pressed={{ opacity: 0.3 }}
              bg={COLORS.secondary}
              px={6}
            >
              Cancel
            </Button>
            <Button
              borderRadius={50}
              onPress={() => closeHandle(true)}
              bg={COLORS.main}
              _pressed={{ opacity: 0.3 }}
              px={6}
            >
              Submit
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
