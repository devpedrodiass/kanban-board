import { styled } from "../../../../styles";

export const ColumnContainer = styled('div', {
  width: '100%',
  minHeight: '100%',
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  fontWeight: 'semi-bold',
  backgroundColor: '$gray100',
  width: '100%',
  zIndex: 1,
})

export const ColorIndicator = styled('div', {
  width: '1rem',
  height: '1rem',

  borderRadius: '5px',

  variants: {
    color: {
      pink: {
        backgroundColor: '$pink',
      },
      red: {
        backgroundColor: '$red',
      },
      orange: {
        backgroundColor: '$orange',
      },
      blue: {
        backgroundColor: '$blue',
      },
      green: {
        backgroundColor: '$green',
      },
    }
  }
})

export const CardsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginTop: '1rem',
  padding: '0.1rem 0.1rem',
})