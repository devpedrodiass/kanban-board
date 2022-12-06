import React from 'react'
import { Card, Column } from '../../../../@types'
import { useBoard } from '../../../../contexts'
import {
  CardsContainer,
  ColorIndicator,
  ColumnContainer,
  HeaderContainer,
} from './Column.styles'
import CardComponent from './components/Card/Card'

interface ColumnProps {
  column: Column
  provided: any
  search: string
}

export default function ColumnComponent(props: ColumnProps) {
  const {
    column: { name, color, id },
    search,
    provided,
  } = props

  const { cards } = useBoard()

  const segmentedCards = () => {
    return cards.filter(
      (card) => card.columnId === id && card.title.toLowerCase().includes(search.toLowerCase())
    )
  }

  return (
    <ColumnContainer>
      <HeaderContainer>
        <ColorIndicator color={color} />
        {name}
      </HeaderContainer>
      <CardsContainer {...provided.droppableProps} ref={provided.innerRef}>
        {segmentedCards().map((card) => (
          <CardComponent key={card.id} card={card} />
        ))}
      </CardsContainer>
      {provided.placeholder}
    </ColumnContainer>
  )
}
