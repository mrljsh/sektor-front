/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'

function App() {
  return (
    <AppContainer>
      <Header>
        <img src="/sektor44-logo.png" alt="Sektor44 logo" />
        <Nav>
          <ul>
            <li>
              <a href="#">POČETNA</a>
            </li>
            <li>
              <a href="#">ODJAVI SE</a>
            </li>
          </ul>
        </Nav>
        </Header>
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
  justify-content: space-between;
  background-color: fff;
  height: 64px;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
  padding: 10px 40px;
`

const Nav = styled.nav`
  & li {
    display: inline-block;
    margin: 5px 5px 5px 0;
  }

  & a {
    padding: 10px 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: opacity 300ms ease;
  }

  & a:hover {
    opacity: 0.6;
  }
`

export default App
