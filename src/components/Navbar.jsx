// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isGalleryActive = location.pathname === "/gallery";
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top px-5 ${
        scrolled ? "scrolled" : "top"
      }`}
    >
      <a className="navbar-brand fw-bold" href="#">
        {isGalleryActive ? "Gallery" : "Tateli Weru"}
      </a>

      {/* 🔥 Tambahkan tombol hamburger */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* ✅ Tambahkan id="navbarNav" */}
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Beranda
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/profil"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Profil Desa
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/infografis"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Infografis
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/berita"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Berita
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Galeri
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
