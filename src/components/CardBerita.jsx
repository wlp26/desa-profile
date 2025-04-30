import React from "react";
import { FaNewspaper } from "react-icons/fa";
import "../css/CardBerita.css"; // Pastikan file CSS terhubung

// Komponen CardBerita
const CardBerita = ({ image, title, description }) => {
  return (
    <div className="card-berita">
      <img className="card-image" src={image} alt="berita" />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardBerita;
