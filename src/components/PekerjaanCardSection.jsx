import React from "react";
import "../css/PekerjaanCardSection.css";

const pekerjaanData = [
  { label: "Belum/Tidak Bekerja", jumlah: 422 },
  { label: "Nelayan", jumlah: 91 },
  { label: "Pelajar/Mahasiswa", jumlah: 416 },
  { label: "Pensiunan", jumlah: 10 },
  { label: "Perdagangan", jumlah: 0 },
  { label: "Mengurus Rumah Tangga", jumlah: 571 },
  { label: "Wiraswasta", jumlah: 103 },
  { label: "Guru", jumlah: 6 },
  { label: "Perawat", jumlah: 1 },
  { label: "Pengacara", jumlah: 0 },
  { label: "Pekerjaan Lainnya", jumlah: 4 },
];

const PekerjaanCardSection = () => {
  const filteredData = pekerjaanData.filter((item) => item.jumlah > 0);

  return (
    <section className="pekerjaan-section py-5">
      <div className="custom-container">
        <h2 className="chart-title text-center mb-2">Statistik Pekerjaan</h2>
        <div className="pekerjaan-grid">
          {filteredData.map((item, index) => (
            <div className="pekerjaan-card" key={index}>
              <div className="pekerjaan-label">{item.label}</div>
              <div className="pekerjaan-jumlah">{item.jumlah}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PekerjaanCardSection;
