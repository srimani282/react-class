import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Counter from "./Components/Counter";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={Counter} />
        <Route path="/home-page" element={HomePage} />
      </Routes>
    </Router>
  );
}

export default App;
