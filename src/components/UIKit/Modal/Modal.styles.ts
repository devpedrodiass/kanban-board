import { ExpandKeyframe, UnExpandKeyframe } from './../../../@keyframes';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '../../../styles';

export const Portal = styled(Dialog.Portal, {})

export const Overlay = styled(Dialog.Overlay, {
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.75)',
  opacity: 0.5,
  inset: 0,
  position: 'fixed',
  zIndex: 999,
})

export const Content = styled(Dialog.Content, {
  backgroundColor: '$white',
  borderRadius: '$md',
  padding: '1.5rem',
  position: 'fixed',
  zIndex: 999,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  display: 'flex',
  flexDirection: 'column',

  width: '90vw',
  maxWidth: '450px',
  maxheight: '450px',

  variants: {
    state: {
      open: {
        animation: `${ExpandKeyframe} 0.2s forwards`,
      },
      close: {
        animation: `${UnExpandKeyframe} 0.2s forwards`,
      }
    }
  }
})

export const Close = styled(Dialog.Close, {
  top: '1rem',
  right: '1rem',
  all: 'unset',
  alignSelf: 'flex-end',

  color: '$gray400',

  transition: 'all 0.2s ease',

  '&:hover': {
    cursor: 'pointer',
    filter: 'brightness(0.8)'
  }
})

export const Title = styled(Dialog.Title, {
  fontSize: '1.6rem',
  fontWeight: 600,
  color: '$black'
})

export const Description = styled(Dialog.Description, {
  fontSize: '1.2rem',
  fontWeight: 400,
  marginBottom: '0.5rem',
  color: '$gray400'
})

export const Divider = styled('div', {
  width: '100%',
  height: '1px',
  opacity: 0.2,
  backgroundColor: '$primary',
})




export const ChildrenContainer = styled('div', {
  display: 'flex',
  marginTop: '1rem',
})