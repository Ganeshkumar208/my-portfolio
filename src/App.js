import React from "react";
import Home from "./RoutingPages/Home";
import Projects from "./RoutingPages/Projects";
import About from "./RoutingPages/About";
import Contact from "./RoutingPages/Contact";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
