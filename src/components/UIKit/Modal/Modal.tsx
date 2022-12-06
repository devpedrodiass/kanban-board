import {
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
  Divider,
  ChildrenContainer,
} from './Modal.styles'
import { X } from 'phosphor-react'
import React from 'react'

interface ModalProps {
  isOpen: boolean
  title: string
  description: string
  children: React.ReactNode
  onClose: () => void
}

export default function Modal(props: ModalProps) {
  const { children, title, description, isOpen, onClose } = props
  return (
    <Portal>
      <Overlay />
      <Content state={isOpen ? 'open' : 'close'}>
        <Close type="button" onClick={onClose}>
          <X size={24} weight="bold" />
        </Close>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ChildrenContainer>{children}</ChildrenContainer>
      </Content>
    </Portal>
  )
}
