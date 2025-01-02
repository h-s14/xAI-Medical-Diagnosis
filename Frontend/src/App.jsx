import React from "react";
import Home from "./pages/Home";
import Diabetes from "./pages/Diabetes";
import BCancer from "./pages/BCancer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <div className="">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diabetes" element={<Diabetes />} />
            <Route path="/bcancer" element={<BCancer />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
