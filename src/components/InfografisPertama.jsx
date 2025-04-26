import React from "react";
import "../css/InfografisPertama.css";

const Infografis = () => {
  return (
    <section className="infografis-section py-5">
      <div className="container text-center">
        <h2 className="chart-title">Administrasi Desa</h2>
        <p className="section-subtitle">
          Data statistik terbaru wilayah Kabupaten Minahasa, Sulawesi Utara.
        </p>

        <div className="infografis-flex-wrapper">
          <div className="stat-bar-column">
            <div className="stat-bar">
              <div className="stat-number">2.144</div>
              <div className="stat-label">Penduduk</div>
            </div>
            <div className="stat-bar">
              <div className="stat-number">1.074</div>
              <div className="stat-label">Perempuan</div>
            </div>

            <div className="stat-bar">
              <div className="stat-number">1.070</div>
              <div className="stat-label">Laki-laki</div>
            </div>
          </div>

          <div className="stat-bar-column">
            <div className="stat-bar">
              <div className="stat-number">745</div>
              <div className="stat-label">Kartu Keluarga</div>
            </div>
            <div className="stat-bar">
              <div className="stat-number">14</div>
              <div className="stat-label">Perpindahan Penduduk</div>
            </div>
            <div className="stat-bar">
              <div className="stat-number">11</div>
              <div className="stat-label">Meninggal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infografis;
