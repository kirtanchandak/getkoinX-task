import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Page from "./pages/Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/:slug" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
