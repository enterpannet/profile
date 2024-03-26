import { useState } from "react";
import Hearder from "./components/Hearder.jsx";
import "./App.css";
import Block from "./components/Block.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Hearder />
        <Block />
        <Footer />
      </div>
    </>
  );
}

export default App;
