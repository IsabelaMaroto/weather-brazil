import { Header } from "./componentes/Header";
import { Search } from "./componentes/SearchWeather";
import { GlobalStyle } from ".";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.section`
  
`

function App() {
  return (
    <Container>
      <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path='/' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
