import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import Modal from '../UIKit/Modal/Modal'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ErrorMessage,
  FormContainer,
  StyledInput,
  SubmitButton,
} from './CreateCardModal.styles'
import { generateRandomId } from '../../@utils'

interface CreateCardModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (formData: NewCardFormType) => void
}

const newCardSchema = z.object({
  id: z.number().default(() => generateRandomId()),
  title: z.string().min(2).max(25),
  description: z.string().min(2).max(1000),
  columnId: z.enum(['1', '2', '3', '4', '5']).default('1'),
  createdAt: z
    .string()
    .default(() => new Intl.DateTimeFormat('en-US').format(new Date())),
})

export type NewCardFormType = z.output<typeof newCardSchema>

export default function CreateCardModal(props: CreateCardModalProps) {
  const { isOpen, onClose, onSubmit } = props

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewCardFormType>({
    resolver: zodResolver(newCardSchema),
  })

  const handleCreateCard = (form: NewCardFormType) => {
    onSubmit(form)
    reset()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create"
      description="Here you can create yours cards.">
      <FormContainer onSubmit={handleSubmit(handleCreateCard)}>
        <StyledInput
          {...register('title')}
          required
          type="text"
          placeholder="Title"
          hasError={errors.title ? true : false}
        />
        <ErrorMessage>{errors.title && errors.title.message}</ErrorMessage>
        <StyledInput
          {...register('description')}
          required
          type="text"
          placeholder="Description"
          hasError={errors.description ? true : false}
        />
        <ErrorMessage>
          {errors.description && errors.description.message}
        </ErrorMessage>
        <SubmitButton type="submit">Create</SubmitButton>
      </FormContainer>
    </Modal>
  )
}
