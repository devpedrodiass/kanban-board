import { createContext, useContext, useEffect, useState } from 'react'
import { Card, ColumnsIds } from '../../@types'

type BoardContextType = {
  cards: Card[]
  createCard: (card: Card) => void
  deleteCard: (cardId: number) => void
  changeCardColumn: (cardId: number, newColumnId: ColumnsIds) => void
}

export const BoardContext = createContext<BoardContextType>(
  {} as BoardContextType
)

interface BoardProviderProps {
  children: React.ReactNode
}

export function BoardProvider(props: BoardProviderProps) {
  const { children } = props

  const [cards, setCards] = useState<Card[]>(() => {
    const cards = localStorage.getItem('@v1.Cards')
    if (cards) {
      return JSON.parse(cards)
    }
    return []
  })

  function createCard(card: Card) {
    setCards((prev) => [...prev, card])
  }

  function deleteCard(cardId: number) {
    setCards((prev) => prev.filter((card) => card.id !== cardId))
  }

  function changeCardColumn(cardId: number, newColumnId: ColumnsIds) {
    setCards((prev) => {
      const newCards = prev.map((card) => {
        if (card.id === cardId) {
          return {
            ...card,
            columnId: newColumnId,
          }
        }
        return card
      })
      return newCards
    })
  }

  useEffect(() => {
    if (cards) {
      localStorage.setItem('@v1.Cards', JSON.stringify(cards))
    }
  }, [cards])

  const sharedValues = {
    cards,
    createCard,
    deleteCard,
    changeCardColumn,
  }
  return (
    <BoardContext.Provider value={sharedValues}>
      {children}
    </BoardContext.Provider>
  )
}

export function useBoard() {
  const context = useContext(BoardContext)
  if (context === undefined) {
    throw new Error('useBoard must be used within a BoardProvider')
  }
  return context
}
