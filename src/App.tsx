import styled from 'styled-components'

function App() {
  return (
    <AppContainer>
      <Header><h1>sektor44</h1></Header>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: grid;
  grid-template-areas: "navbar navbar navbar" "sidebar main main"  "sidebar main main";
`

const Header = styled.header`
  grid-area: navbar;
  background-color: yellow;
`

export default App
