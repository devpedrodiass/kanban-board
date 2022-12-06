import { Cards, GithubLogo, Trash } from 'phosphor-react'
import React from 'react'
import {
  LinkButton,
  Logo,
  MenuContainer,
  Navigation,
  GithubButton,
} from './Menu.styles'

export default function Menu() {
  return (
    <MenuContainer>
      <Logo title="Logo">Kanban</Logo>
      <Navigation>
        <LinkButton title="Go to Board Page">
          <Cards weight="bold" size={20} />
        </LinkButton>
      </Navigation>
      <GithubButton
        title="Github"
        type="button"
        href="https://github.com/pedr0d1as"
        target="_blank">
        <GithubLogo weight="bold" size={32} />
      </GithubButton>
    </MenuContainer>
  )
}
