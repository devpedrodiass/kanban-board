import { styled } from "../../../../../../styles";

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  borderRadius: '$md',

  backgroundColor: '$white',

  filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',

  transition: 'all 0.2s',

  '&:hover': {
    transform: 'translateY(-2px)',
    cursor: 'pointer',
  }

})

export const CardHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

})

export const Title = styled('h1', {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  lineHeight: '1.5rem',
})

export const DeleteButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '1.5rem',
  height: '1.5rem',

  borderRadius: '50%',

  transition: 'filter 0.2s',

  color: '$gray400',

  '&:hover': {
    filter: 'brightness(0.8)',
  }
})

export const CardBody = styled('div', {

  color: '$gray400',
})

export const CardFooter = styled('footer', {
  marginTop: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  color: '$gray400',
})