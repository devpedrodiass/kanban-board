import { GoDownKeyFrame } from "../../@keyframes/goDown";
import { styled } from "../../styles";

export const FormContainer = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
})

export const StyledInput = styled('input', {
  all: 'unset',
  width: '100%',

  backgroundColor: '$gray100',
  padding: '1rem',

  borderRadius: '$md',

  transition: 'all 0.2s ease-in-out',

  variants: {
    hasError: {
      true: {
        border: '2px solid $red',
      },
      false: {
        border: '2px solid transparent',
      }
    }
  }
})

export const ErrorMessage = styled('span', {
  marginTop: '-0.8rem',
  color: '$red',
  fontSize: '0.75rem',

  animation: `${GoDownKeyFrame} 0.2s ease-in-out`,
})

export const SubmitButton = styled('button', {
  all: 'unset',

  width: '100%',

  cursor: 'pointer',
  padding: '1rem',

  backgroundColor: '$primary',
  color: '$white',

  borderRadius: '$md',
  border: '2px solid transparent',

  textAlign: 'center',
  fontWeight: 'bold',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$white',
    color: '$primary',
    border: '2px solid $primary',
  }
})