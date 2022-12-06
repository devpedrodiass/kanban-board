import { styled } from "../../styles";

export const BoardContainer = styled('div', {
  padding: '1.5rem 0',
  width: '100%',
  height: '100%',
})

export const TitlePage = styled('h1', {

})

export const ActionsContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  marginTop: '1rem',

  justifyContent: 'space-between',
})

export const CreateCardButton = styled('button', {
  all: 'unset',

  width: 'fit-content',
  borderRadius: '$md',
  padding: '0.8rem 1rem',
  marginTop: '1rem',

  backgroundColor: '$primary',
  color: '$white',

  transition: 'all 0.2s ease',

  filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',


  '&:hover': {
    cursor: 'pointer',

    backgroundColor: '$white',
    color: '$primary',
  }
})

export const SearchContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',

  backgroundColor: '$white',
  color: '$black',

  width: 'fit-content',
  borderRadius: '$md',
  padding: '0.8rem 1rem',
  marginTop: '1rem',

  filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',

  '&::placeholder': {
    color: '$gray200',
  }
})

export const InputSearch = styled('input', {
  all: 'unset',
})

export const ColmunsContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  width: '100%',
  marginTop: '2rem',
  height: '800px',

  overflowY: 'scroll',
})