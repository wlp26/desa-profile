import React from "react";
import "../css/StatusPerkawinan.css";
import { FaHeart, FaUser, FaUserSlash, FaUserAltSlash } from "react-icons/fa";
import { FaHeartCrack } from "react-icons/fa6";

const data = [
  { label: "Belum Kawin", value: 922, icon: <FaUser />, color: "#00b8d4" },
  { label: "Kawin", value: 1082, icon: <FaHeart />, color: "#f44336" },
  { label: "Cerai Hidup", value: 15, icon: <FaHeartCrack />, color: "#ff8a65" },
  {
    label: "Cerai Mati",
    value: 125,
    icon: <FaUserAltSlash />,
    color: "#383B39",
  },
];

const StatusPerkawinan = () => {
  return (
    <section className="perkawinan-section py-5">
      <h2 className="chart-title mb-2">Status Perkawinan</h2>
      <div className="perkawinan-grid">
        {data.map((item, index) => (
          <div
            key={index}
            className="perkawinan-card"
            style={{ borderTop: `5px solid ${item.color}` }}
          >
            <div className="perkawinan-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <h3 className="perkawinan-value">
              {item.value.toLocaleString()} Orang
            </h3>
            <p className="perkawinan-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatusPerkawinan;
