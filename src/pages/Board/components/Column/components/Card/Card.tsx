import { Calendar, DotsThreeVertical, Trash } from 'phosphor-react'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useDrag } from 'react-dnd'
import { Card } from '../../../../../../@types'
import { useBoard } from '../../../../../../contexts'
import {
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
  DeleteButton,
  Title,
} from './Card.styles'

interface CardProps {
  card: Card
}

export default function CardComponent(props: CardProps) {
  const {
    card: { title, description, id, createdAt, columnId },
  } = props

  const { deleteCard } = useBoard()

  const hasId = id !== undefined

  return (
    <Draggable
      key={Number(id)}
      index={Number(id) + 1}
      draggableId={hasId ? id.toString() : ''}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <CardHeader>
            <Title>{title}</Title>
            <DeleteButton type="button" onClick={() => hasId && deleteCard(id)}>
              <Trash size={20} weight="bold" />
            </DeleteButton>
          </CardHeader>
          <CardBody>{description}</CardBody>

          <CardFooter>
            <Calendar size={20} weight="bold" />
            <span>{createdAt}</span>
          </CardFooter>
        </CardContainer>
      )}
    </Draggable>
  )
}
