import { styled } from "../../styles";

export const LayoutContainer = styled('div', {
  minWidth: '100vw',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '70px 1fr',
  padding: '1.5rem',
})