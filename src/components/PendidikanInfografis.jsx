import React from "react";
import "../css/PendidikanInfografis.css";
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

const pendidikanData = [
  { tingkat: "S3", jumlah: 0 },
  { tingkat: "S2", jumlah: 2 },
  { tingkat: "S1", jumlah: 68 },
  { tingkat: "D3", jumlah: 10 },
  { tingkat: "D1/D2", jumlah: 4 },
  { tingkat: "SLTA", jumlah: 675 },
  { tingkat: "SLTP", jumlah: 358 },
  { tingkat: "Tamat SD", jumlah: 458 },
  { tingkat: "Belum Tamat SD", jumlah: 249 },
  { tingkat: "Tidak/Belum Sekolah", jumlah: 320 },
];

const PendidikanInfografis = () => {
  return (
    <section className="pendidikan-section py-5">
      <h2 className="chart-title mb-2">Tingkat Pendidikan Penduduk</h2>
      <div className="pendidikan-wrapper">
        <div className="chart-container">
          <div style={{ overflowX: "auto" }}>
            <div style={{ width: "1000px" }}>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={pendidikanData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis
                    dataKey="tingkat"
                    type="category"
                    width={120}
                    interval={0}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip formatter={(value) => `${value} Orang`} />
                  <Bar dataKey="jumlah" fill="#00b8d4">
                    <LabelList dataKey="jumlah" position="right" />
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

export default PendidikanInfografis;
