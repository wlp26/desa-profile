import React from "react";
import "../css/Demografi.css";
import demografiImg from "../assets/demografi.jpeg"; // gambar ilustrasi kamu

const Demografi = () => {
  return (
    <section className="demografi-section">
      <div className="custom-container demografi-wrapper">
        {/* Kiri - Teks */}
        <div className="demografi-text">
          <h2 className="demografi-title">DEMOGRAFI PENDUDUK</h2>
          <p className="demografi-desc">
            Memberikan informasi lengkap mengenai karakteristik demografi
            penduduk suatu wilayah. Mulai dari jumlah penduduk, usia, jenis
            kelamin, tingkat pendidikan, pekerjaan, agama, dan aspek penting
            lainnya yang menggambarkan komposisi populasi secara rinci.
          </p>
        </div>

        {/* Kanan - Gambar */}
        <div className="demografi-image">
          <img src={demografiImg} alt="Ilustrasi Demografi" />
        </div>
      </div>
    </section>
  );
};

export default Demografi;
