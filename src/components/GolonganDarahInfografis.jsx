import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "../css/GolonganDarahInfografis.css";

const darahData = [
  { golongan: "A", jumlah: 76 },
  { golongan: "B", jumlah: 62 },
  { golongan: "AB", jumlah: 18 },
  { golongan: "O", jumlah: 321 },
  { golongan: "A+", jumlah: 3 },
  { golongan: "A-", jumlah: 0 },
  { golongan: "B+", jumlah: 2 },
  { golongan: "B-", jumlah: 0 },
  { golongan: "AB+", jumlah: 0 },
  { golongan: "AB-", jumlah: 2 },
  { golongan: "O+", jumlah: 0 },
  { golongan: "O-", jumlah: 5 },
  { golongan: "Tidak Diketahui", jumlah: 1655 },
];

const COLORS = [
  "#00b8d4",
  "#3fbf7f",
  "#f44336",
  "#ff8a65",
  "#9575cd",
  "#4db6ac",
  "#ff7043",
  "#9ccc65",
  "#7986cb",
  "#ba68c8",
  "#4fc3f7",
  "#f06292",
  "#9e9e9e",
];

const DonutChartGolonganDarah = () => {
  const total = darahData.reduce((acc, item) => acc + item.jumlah, 0);

  return (
    <section className="darah-section py-5">
      <div className="custom-container">
        <h2 className="chart-title text-center">Distribusi Golongan Darah</h2>
        <div className="chart-container">
          <div className="donut-flex-wrapper">
            {/* Donut Chart */}

            <div className="donut-wrapper">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={darahData}
                    dataKey="jumlah"
                    nameKey="golongan"
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={140}
                    label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                  >
                    {darahData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} Jiwa`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="donut-center">
                <strong>{total}</strong>
                <span>Jiwa</span>
              </div>
            </div>

            {/* Keterangan */}
            <div className="donut-keterangan">
              <h4>
                <strong>Keterangan:</strong>
              </h4>
              <div className="darah-grid">
                {darahData.map((item, index) => (
                  <div className="darah-item" key={index}>
                    <span>
                      {item.golongan} : {item.jumlah} Jiwa
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonutChartGolonganDarah;
