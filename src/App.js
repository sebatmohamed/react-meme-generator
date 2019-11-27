import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MemeGenerator from "./Components/MemeGenerator";
import './style.css'

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
      <Footer />
    </div>
  );
}

export default App;
