import React from "react";
import "../css/Hero.css";
import background from "../assets/background-web.mp4";

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
          <button className="btn btn-outline-light me-3 px-4 py-2">
            Kunjungi
          </button>
          <button className="btn btn-light px-4 py-2">Jelajahi</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
