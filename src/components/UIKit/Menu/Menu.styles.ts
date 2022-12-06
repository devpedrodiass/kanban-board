import { styled } from "../../../styles";

export const MenuContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$white',
  width: '100%',

  borderRadius: '$md',
  padding: '0.5rem 1.5rem',

  filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))'
})

export const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '0.5rem',

  fontWeight: 'bold',
  letterSpacing: '0.1rem',


  color: '$primary',
  border: '3px solid $primary',

})

export const Navigation = styled('div', {
})

export const LinkButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '50%',
  width: '2rem',
  height: '2rem',
  padding: '0.5rem',

  color: '$white',
  backgroundColor: '$primary',

  fontWeight: 'bold',

  cursor: 'pointer',

  filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))'
})

export const GithubButton = styled('a', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '2rem',
  height: '2rem',

  padding: '0.5rem',

  borderRadius: '50%',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    cursor: 'pointer',

    backgroundColor: '$gray100',
  }
})

