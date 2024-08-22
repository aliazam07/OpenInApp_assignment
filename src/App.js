import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
