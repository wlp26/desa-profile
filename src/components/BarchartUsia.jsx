import React from "react";
import "../css/BarchartUsia.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const usiaData = [
  { usia: "0-4", jumlah: 135 },
  { usia: "5-9", jumlah: 146 },
  { usia: "10-14", jumlah: 189 },
  { usia: "15-19", jumlah: 161 },
  { usia: "20-24", jumlah: 181 },
  { usia: "25-29", jumlah: 180 },
  { usia: "30-34", jumlah: 169 },
  { usia: "35-39", jumlah: 126 },
  { usia: "40-44", jumlah: 150 },
  { usia: "45-49", jumlah: 163 },
  { usia: "50-54", jumlah: 143 },
  { usia: "55-59", jumlah: 123 },
  { usia: "60-64", jumlah: 100 },
  { usia: "65-69", jumlah: 84 },
  { usia: "70-74", jumlah: 55 },
  { usia: "75+", jumlah: 39 },
];

const BarchartUsia = () => {
  return (
    <section className="py-5" style={{ background: "#f8f8f8" }}>
      <h2 className="chart-title">Jumlah Penduduk Berdasarkan Usia</h2>

      {/* ✅ PENTING: div scroll PUNYA min-width */}
      <div className="chart-wrapper">
        <div className="chart-container">
          <div style={{ overflowX: "auto" }}>
            <div style={{ width: "1000px" }}>
              {/* ✅ Lebarkan area chart di desktop */}
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={usiaData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="usia"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="jumlah" fill="#00b8d4">
                    <LabelList dataKey="jumlah" position="top" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarchartUsia;
