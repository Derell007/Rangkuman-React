import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Foot from "./components/footer";
import Index from "./pages/index";
import Article from "./pages/page-rangkuman/page1";
import "./components/header.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/article" element={<Article />} />
      </Routes>

      <Foot />
    </Router>
  );
}

export default App;
