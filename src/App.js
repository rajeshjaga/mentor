import React from "react";
import Page from "./Pages/Page";
import Nav from "./Components/Nav"
import Footer from './Components/Footer';
import "./Scss/style.scss";

function App() {
  return (
    <>
      <Nav />
      <Page />
      <Footer />
    </>
  )
}

export default App;
