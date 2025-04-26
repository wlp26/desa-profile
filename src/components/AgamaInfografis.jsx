import React from "react";
import "../css/AgamaInfografis.css";
import {
  FaMosque,
  FaCross,
  FaChurch,
  FaOm,
  FaYinYang,
  FaPeace,
  FaPray,
} from "react-icons/fa";

const agamaData = [
  { label: "Islam", value: 54, icon: <FaMosque />, color: "#00b8d4" },
  { label: "Kristen", value: 2019, icon: <FaCross />, color: "#3fbf7f" },
  { label: "Katholik", value: 64, icon: <FaChurch />, color: "#f44336" },
  { label: "Hindu", value: 6, icon: <FaOm />, color: "#ff9800" },
  { label: "Buddha", value: 0, icon: <FaYinYang />, color: "#9e9e9e" },
  { label: "Konghucu", value: 0, icon: <FaPeace />, color: "#607d8b" },
  {
    label: "Kepercayaan terhadap Tuhan YME",
    value: 1,
    icon: <FaPray />,
    color: "#8e24aa",
  },
];

const AgamaInfografis = () => {
  return (
    <section className="agama-section py-5">
      <div className="custom-container">
        <h2 className="chart-title mb-2 text-center">Agama yang Dianut</h2>
        <div className="agama-list">
          {agamaData.map((item, index) => (
            <div className="agama-item" key={index}>
              <div
                className="agama-color-bar"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="agama-info">
                <div className="agama-text">
                  <h4>{item.label}</h4>
                  <p>{item.value.toLocaleString()} Orang</p>
                </div>
                <div className="agama-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgamaInfografis;
