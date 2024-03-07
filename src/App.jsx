import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const isFirstTime = localStorage.getItem("isFirstTime");

    if (!isFirstTime) {
      navigate("/bitcoin");
      localStorage.setItem("isFirstTime", "false");
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/:slug" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
