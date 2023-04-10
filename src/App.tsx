import styled from 'styled-components'

function App() {
  return (
    <AppContainer>
      <Header><img src="/sektor44-logo.png" alt="Sektor44 logo" /></Header>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: grid;
  grid-template-areas: "navbar navbar navbar" "sidebar main main"  "sidebar main main";
`

const Header = styled.header`
  grid-area: navbar;
  display: flex;
  align-items: center;
  background-color: fff;
  height: 64px;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
  padding: 10px 40px;
`

export default App
