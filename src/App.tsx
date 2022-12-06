import { BoardProvider } from './contexts'
import BasicLayout from './layouts/BasicLayout/BasicLayout'
import { globalStyles } from './styles/global'

globalStyles()

function App() {
  return (
    <>
      <BoardProvider>
        <BasicLayout />
      </BoardProvider>
    </>
  )
}

export default App
