import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import './App.css';
import About from "./pages/About";

function App() {
  return (
    <main>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;