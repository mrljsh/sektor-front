import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <AppContainer>
      <Header />
      <Sidebar />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  grid-template-areas: "navbar navbar navbar" "sidebar main main" "sidebar main main";
  grid-template-rows: 64px auto auto;
  height: 100vh;
`;

export default App;
