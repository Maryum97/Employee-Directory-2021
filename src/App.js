// main dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import pages here
import Directory from "./pages/Directory";
// import components here
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
