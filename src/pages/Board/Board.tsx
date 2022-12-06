import * as Dialog from '@radix-ui/react-dialog'
import { MagnifyingGlass } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { ALL_COLUMNS } from '../../@constants'
import {
  ActionsContainer,
  BoardContainer,
  ColmunsContainer,
  CreateCardButton,
  InputSearch,
  SearchContainer,
  TitlePage,
} from './Board.styles'
import ColumnComponent from './components/Column/Column'
import CreateCardModal, {
  NewCardFormType,
} from '../../components/CreateCardModal/CreateCardModal'
import { useBoard } from '../../contexts'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { ColumnsIds } from '../../@types'
import { clearTimeout } from 'timers'

export default function Board() {
  const [search, setSearch] = useState('')
  const { createCard, changeCardColumn } = useBoard()
  const [isCreateCardModalOpen, setIsCreateCardModalOpen] = useState(false)

  const handleSearch = (text: string) => {
    setSearch(text)
  }

  const handleOpenCreateCardModal = () => {
    setIsCreateCardModalOpen(true)
  }

  const handleCreateCard = (form: NewCardFormType) => {
    createCard(form)
    setIsCreateCardModalOpen(false)
  }

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      setLoaded(true)
    }
  })

  return (
    <BoardContainer>
      <TitlePage>Your Board</TitlePage>
      <ActionsContainer>
        <SearchContainer>
          <MagnifyingGlass weight="bold" size={20} />
          <InputSearch
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search here..."
          />
        </SearchContainer>

        <CreateCardButton type="button" onClick={handleOpenCreateCardModal}>
          Create Card
        </CreateCardButton>
      </ActionsContainer>

      {loaded ? (
        <DragDropContext
          onDragEnd={(e) =>
            changeCardColumn(
              Number(e.draggableId),
              e.destination ? (e.destination.droppableId as ColumnsIds) : '1'
            )
          }>
          <ColmunsContainer>
            {ALL_COLUMNS.map((column) => {
              return (
                <Droppable key={column.id} droppableId={column.id}>
                  {(provided) => (
                    <ColumnComponent
                      column={column}
                      provided={provided}
                      search={search}
                    />
                  )}
                </Droppable>
              )
            })}
          </ColmunsContainer>
        </DragDropContext>
      ) : null}

      <Dialog.Root open={isCreateCardModalOpen}>
        <CreateCardModal
          onSubmit={handleCreateCard}
          isOpen={isCreateCardModalOpen}
          onClose={() => setIsCreateCardModalOpen(false)}
        />
      </Dialog.Root>
    </BoardContainer>
  )
}
