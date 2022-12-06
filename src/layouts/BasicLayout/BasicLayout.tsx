import React from 'react'
import Menu from '../../components/UIKit/Menu/Menu'
import Board from '../../pages/Board/Board'
import { LayoutContainer } from './BasicLayout.styles'

export default function BasicLayout() {
  return (
    <LayoutContainer>
      <Menu />
      <Board />
    </LayoutContainer>
  )
}
