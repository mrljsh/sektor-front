import styled from 'styled-components'
import Header from './components/Header'

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: grid;
  grid-template-areas: "navbar navbar navbar" "sidebar main main"  "sidebar main main";
`

export default App
