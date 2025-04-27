import React from "react";
import "../css/Hero.css";
import background from "../assets/background-web.mp4";

const scrollToMaps = () => {
  const isMobile = window.innerWidth <= 768;
  const offset = isMobile ? 50 : 100;
  const mapsSection = document.getElementById("maps-section");
  window.scrollTo({ behavior: "smooth", top: mapsSection.offsetTop - offset });
};

const scrollToGallery = () => {
  const isMobile = window.innerWidth <= 768;
  const offset = isMobile ? 50 : 100;
  const gallerySection = document.getElementById("gallery-section");
  window.scrollTo({
    behavior: "smooth",
    top: gallerySection.offsetTop - offset,
  });
};

const Hero = () => {
  return (
    <div className="hero-container">
      <video className="bg-video" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="hero-content text-white text-center">
        <h1 className="display-4 fw-bold">
          Selamat Datang di
          <br />
          Profile Desa Kami
        </h1>
        <p className="lead">
          Temukan keindahan pantai dan budaya desa yang unik di sini.
        </p>
        <div className="mt-4">
          <button
            className="btn btn-outline-light me-3 px-4 py-2"
            onClick={scrollToMaps}
          >
            Kunjungi
          </button>
          <button className="btn btn-light px-4 py-2" onClick={scrollToGallery}>
            Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
