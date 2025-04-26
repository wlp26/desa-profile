import React from "react";
import "../css/PertumbuhanPenduduk.css";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";

const pertumbuhanData = [
  { tahun: "2020", lahir: 35, pertumbuhan: 2 },
  { tahun: "2021", lahir: 23, pertumbuhan: 1 },
  { tahun: "2022", lahir: 37, pertumbuhan: 2 },
  { tahun: "2023", lahir: 27, pertumbuhan: 1 },
  { tahun: "2024", lahir: 13, pertumbuhan: 1 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <p>
          <strong>{label}</strong>
        </p>
        <p>Lahir: {payload[0].value} orang</p>
        <p>Pertumbuhan: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

const PertumbuhanPenduduk = () => {
  return (
    <section className="pertumbuhan-section py-5">
      <h2 className="chart-title">Pertumbuhan Penduduk</h2>
      <div className="chart-wrapper">
        <div className="chart-container">
          <div style={{ overflowX: "auto" }}>
            <div style={{ width: "1000px" }}>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                  data={pertumbuhanData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="tahun" />
                  <YAxis
                    yAxisId="left"
                    label={{
                      value: "Jumlah Lahir",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    label={{
                      value: "Pertumbuhan (%)",
                      angle: -90,
                      position: "insideRight",
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="lahir"
                    barSize={40}
                    fill="#00b8d4"
                  >
                    <LabelList dataKey="lahir" position="top" />
                  </Bar>
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="pertumbuhan"
                    stroke="#f44336"
                    strokeWidth={3}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PertumbuhanPenduduk;
