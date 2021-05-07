// main dependencies
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
// import components here
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
