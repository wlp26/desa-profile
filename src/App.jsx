import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DemografiPage from "./pages/DemografiPage";
import DesaProfile from "./pages/DesaProfile";
import BeritaPage from "./pages/BeritaPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infografis" element={<DemografiPage />} />
        <Route path="/profil" element={<DesaProfile />} />
        <Route path="/berita" element={<BeritaPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
