import React from "react";
import CardBerita from "./CardBerita";
import "../css/CardBerita.css";
import { Container, Row } from "react-bootstrap";

import berita1 from "../assets/berita1.jpg";
import berita2 from "../assets/berita2.jpg";
import berita3 from "../assets/berita3.jpg";
import berita4 from "../assets/berita4.jpg";
import berita5 from "../assets/berita5.jpg";
import berita6 from "../assets/berita6.jpg";
import berita7 from "../assets/berita7.jpg";
import berita8 from "../assets/berita8.jpg";
import berita9 from "../assets/berita9.jpg";
import berita10 from "../assets/berita10.jpg";
import berita11 from "../assets/berita11.jpg";
import berita12 from "../assets/berita12.jpg";
import berita13 from "../assets/berita13.jpg";

// Daftar data berita
const beritaData = [
  {
    id: 1,
    image: berita1,
    title: "Pantai Buloh",
    description:
      "Sambang di desa Tateli Weru bersama anak - Anak Remaja di Pantai Buloh",
  },
  {
    id: 2,
    image: berita2,
    title: "Pengalangan dana Jemaat GKII IKTHUS",
    description:
      "Personil Polsek Pineleng selaku bhabinkamtibmas Sambang di desa Tateli Weru jaga 2, memantau giat Pengalangan dana Jemaat GKII IKTHUS Tateli Weru",
  },
  {
    id: 3,
    image: berita3,
    title: "Giat TULUDE",
    description: "Giat TULUDE desa Tateli 3, Tateli Dan Tateli Weru",
  },
  {
    id: 4,
    image: berita4,
    title: "BML Property Group",
    description:
      "BML Property Group Kembali Gelar Pasar Murah, Ratusan Warga Padati Kantor Desa Tateli Weru",
  },
  {
    id: 5,
    image: berita5,
    title: "Perkunjungan Kementrian",
    description:
      "Perkunjungan Kementrian Desa ke Desa Tateli Weru untuk pengecekan pengelolaan BUMDes Tanjung Mandolang",
  },
  {
    id: 6,
    image: berita6,
    title:
      "Pentahbisan dan Peresmian toko Nelayan & Kantor BUMDES TANJUNG MANDOLANG",
    description:
      "Pentahbisan dan Peresmian toko Nelayan & Kantor BUMDES TANJUNG MANDOLANG Desa Tateli Weru oleh Pendeta Jurifry Osak S.th, Kepala Dinas Pariwisata Kabupaten Minahasa Bapak Steidy Tumbelaka M.si Dan Koordinator Konsultan Pendamping Profesional Desa Provinsi Sulawesi Utara Bapak Green Manueke ST. MSi",
  },
  {
    id: 7,
    image: berita7,
    title: "Proses Pembuatan Toko Nelayan",
    description: "Proses Pembuatan Toko Nelayan",
  },
  {
    id: 8,
    image: berita8,
    title: "Perbaikan air bersih jaga 4",
    description: "Perbaikan air bersih jaga 4",
  },
  {
    id: 9,
    image: berita9,
    title: "Gerak jalan jaga 1 desa Tateli Weru",
    description: "Gerak jalan jaga 1 desa Tateli Weru",
  },
  {
    id: 10,
    image: berita10,
    title: "Jumat Bersih, Desa Tateli Weru",
    description: "Jumat Bersih, Desa Tateli Weru",
  },
  {
    id: 11,
    image: berita11,
    title: "Hasil tangkapan perahu bumdes",
    description:
      "Hasil tangkapan perahu bumdes. Sambil bongkar muatan torang bacirita tentang keluhan-keluhan nelayan untuk mencari solusi bersama.",
  },
  {
    id: 12,
    image: berita12,
    title: "mengembangkan usaha yang ada di desa",
    description:
      "Tidak hanya mengembangkan usaha yang ada di desa, tapi juga memfasilitasi para nelayan membentuk kelompok nelayan, sehingga boleh terbentuk 3 kelompok nelayan. \n1.kelompon nelayan Tanjung Mandolang \n2.kelompok nelayan Megalodon Mandolang \n3.kelompok nelayan Bahu Indah Kelompok nelayan ini di bentuk untuk mensejahterakan nelayan yang ada di desa Tateli Weru.",
  },
  {
    id: 13,
    image: berita13,
    title: "Pemasukan unit usaha mulai bulan Mei - Desember 2021",
    description:
      "Pemasukan unit usaha mulai bulan Mei - Desember 2021 \n pos pantai : Rp 4.647.000 \n air bersih : Rp 12.760.000 \n perahu tuna : Rp 15.472.000 \n total : Rp 32.879.000",
  },
];

const BeritaList = () => {
  return (
    <section className="berita-section">
      <Container className="berita-container">
        <h2 className="chart-title">Berita Terbaru</h2>

        <Row>
          <div className="berita-list">
            {beritaData.map((berita) => (
              <CardBerita
                key={berita.id}
                image={berita.image}
                title={berita.title}
                description={berita.description}
              />
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default BeritaList;
