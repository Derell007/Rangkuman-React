import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Foot from "./components/footer";
import Index from "./pages/index";
import Article1 from "./pages/page-rangkuman/page1";
import Article2 from "./pages/page-rangkuman/page2";
import Article3 from "./pages/page-rangkuman/page3";
import Article4 from "./pages/page-rangkuman/page4";
import Article5 from "./pages/page-rangkuman/page5";
import Article6 from "./pages/page-rangkuman/page6";
import Article7 from "./pages/page-rangkuman/page7";
import Article8 from "./pages/page-rangkuman/page8";
import Article9 from "./pages/page-rangkuman/page9";
import Article10 from "./pages/page-rangkuman/page10";
import Article11 from "./pages/page-rangkuman/page11";
import "./components/header.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/article1" element={<Article1 />} />
        <Route path="/article2" element={<Article2 />}/>
        <Route path="/article3" element={<Article3 />}/>
        <Route path="/article4" element={<Article4 />}/>
        <Route path="/article5" element={<Article5 />}/>
        <Route path="/article6" element={<Article6 />}/>
        <Route path="/article7" element={<Article7 />}/>
        <Route path="/article8" element={<Article8 />}/>
        <Route path="/article9" element={<Article9 />}/>
        <Route path="/article10" element={<Article10 />}/>
        <Route path="/article11" element={<Article11 />}/>
      </Routes>

      <Foot />
    </Router>
  );
}

export default App;
