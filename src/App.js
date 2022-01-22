import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";

import Navbar from "./Components/Navbar";
import Counter from "./Components/Counter";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/post-form" element={<PostForm />} />
        <Route path="/post-list/" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
