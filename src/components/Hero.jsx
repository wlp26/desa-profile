import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter"; // Import Typewriter effect
import "../css/Hero.css";
// import background from "../assets/background-web.mp4";

const scrollToMaps = () => {
  const isMobile = window.innerWidth <= 768;
  const offset = isMobile ? 50 : 100;
  const mapsSection = document.getElementById("maps-section");
  window.scrollTo({ behavior: "smooth", top: mapsSection.offsetTop - offset });
};

// const scrollToGallery = () => {
//   const isMobile = window.innerWidth <= 768;
//   const offset = isMobile ? 50 : 100;
//   const gallerySection = document.getElementById("gallery-section");
//   window.scrollTo({
//     behavior: "smooth",
//     top: gallerySection.offsetTop - offset,
//   });
// };

const Hero = () => {
  // Inisialisasi efek typewriter
  const [text] = useTypewriter({
    words: ["Selamat Datang di Desa Tateli Weru", "Silahkan Melihat-lihat"], // Teks untuk typewriter
    loop: 0, // Loop 0 untuk hanya sekali
    typeSpeed: 150, // Kecepatan ketikan
    deleteSpeed: 50, // Kecepatan penghapusan
    delaySpeed: 1000, // Delay antar kata
  });

  return (
    <div className="hero-container">
      {/* <video className="bg-video" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video> */}
      <div className="bg-image"></div>
      <div className="overlay"></div>
      <div className="hero-content text-white text-center">
        <h1 className="display-4 fw-bold">
          {/* Menggunakan teks dengan efek typewriter */}
          <span>{text}</span>
          <Cursor cursorColor="white" /> {/* Penunjuk kursor */}
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
          {/* <button className="btn btn-light px-4 py-2" onClick={scrollToGallery}>
            Gallery
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
