import React from "react";
import "../css/Maps.css";

const Maps = () => {
  return (
    <section id="maps-section" className="peta-section py-5">
      <div className="container">
        <h2 className="chart-title">Peta Lokasi Desa</h2>
        <div className="peta-grid">
          {/* Kiri - Info Card */}
          <div className="peta-info-card">
            <div className="peta-info">
              <h4>Batas Desa:</h4>
              <div className="peta-batas-grid">
                <div>
                  <strong>Utara</strong>
                  <p>Laut Sulawesi</p>
                </div>
                <div>
                  <strong>Timur</strong>
                  <p>Desa/Kelurahan Tateli, Kecamatan Mandolang</p>
                </div>
                <div>
                  <strong>Selatan</strong>
                  <p>Desa/Kelurahan Koha, Kecamatan Mandolang</p>
                </div>
                <div>
                  <strong>Barat</strong>
                  <p>Desa/Kelurahan Koha, Kecamatan Mandolang</p>
                </div>
              </div>

              <hr />

              <div className="peta-info-item">
                <strong>Luas Pemukiman:</strong>
                <span>125 Ha/m2</span>
              </div>
              <div className="peta-info-item">
                <strong>Luas Perkebunan:</strong>
                <span>25 Ha/m2</span>
              </div>
              <div className="peta-info-item">
                <strong>Luas Perkuburan:</strong>
                <span>3.300 Ha/m2</span>
              </div>
              <div className="peta-info-item">
                <strong>Luas Pekarangan:</strong>
                <span>5 Ha/m2</span>
              </div>

              <hr />

              <div className="peta-info-item">
                <strong>Jumlah Penduduk:</strong>
                <span>2.144 Jiwa</span>
              </div>
            </div>
          </div>

          {/* Kanan - Map */}
          <div className="peta-map">
            <iframe
              title="Peta Lokasi"
              src="https://www.google.com/maps?q=1.4314224,124.7381662&z=15&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;
