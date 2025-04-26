import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DemografiPage from "./pages/DemografiPage";

function App() {
  return (
    <Router basename="desa-profile">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infografis" element={<DemografiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
