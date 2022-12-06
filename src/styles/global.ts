import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '--webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray100',
    color: '$black',
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: "100vw",
    minHeight: "100vh",
  },

  '::-webkit-scrollbar': {
    width: '10px',
    height: '10px',
    cursor: 'pointer',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: '$gray100'
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$primary'
  },
  '::-webkit-scrollbar-thumb:hover': {
    filter: 'brightness(0.7)'
  },

  'body, input, button': {
    font: '16px Poppins, sans-serif',
    fontWeight: 400,
  },
})