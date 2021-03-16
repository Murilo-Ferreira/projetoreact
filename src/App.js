import React from "react";
import { BrowserRouter } from "react-router-dom";
import Route from '../src/router';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
    <BrowserRouter>
      <Route/>
    </BrowserRouter>
    <GlobalStyle />
    </>
  )
}

export default App;
