import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Nav from "./Components/Nav";
import Logo from "./Components/Logo";

function App() {
  return (
    <BrowserRouter>
      <Logo/>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
