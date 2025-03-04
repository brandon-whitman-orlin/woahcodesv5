import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";

import "./App.css"; // Ensure global styles are imported

const App = () => {
  return (
    <div className="app-container" style={{ minHeight: '100%', width: '100%' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;