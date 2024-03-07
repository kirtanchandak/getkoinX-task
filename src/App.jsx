import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:slug" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
