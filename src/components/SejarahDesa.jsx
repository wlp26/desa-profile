import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/SejarahDesa.css";

const SejarahDesa = () => {
  return (
    <section className="sejarah-desa py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <div className="sejarah-content">
              <div className="background-overlay"></div>
              <div className="content-wrapper">
                <h2 className="section-title">Desa Tateli Weru</h2>
                <p className="sejarah-text">
                  Desa Tateli Weru merupakan suatu desa yang terbentuk dari
                  perjalanan sejarah yang panjang. Pada waktu itu peran
                  masyarakat Sangihe sebagai masyarakat pendatang (tahun 1928
                  dan 1930an) yang mulai merintis wilayah desa Tateli Weru, yang
                  dahulunya hutan menjadi perkebunan dan kemudian menjadi
                  perkampungan Buloh dan Bahu. Berkat usaha dan kerjasama mereka
                  demi terwujudnya suatu desa yang mandiri maka pada tahun 1985
                  terbentuklah desa Tateli Weru sebagai desa pemekaran dari desa
                  Tateli.
                </p>
                <p className="sejarah-text">
                  Desa Tateli Weru terbentuk lewat pemekaran dari desa Tateli
                  pada 11 Maret 1985, di bawah pimpinan Bapak Zeth Kampohiang.
                  Penduduk pada waktu itu berjumlah 745 jiwa dengan 230 KK. Dari
                  tahun ke tahun penduduk terus berkembang hingga menjadi 1.730
                  jiwa.
                </p>
                <p className="sejarah-text">
                  Desa Tateli Weru telah dijabat oleh enam orang Kepala Desa
                  yakni Bapak Zeth Kampohiang, Bapak Darius Lengkanaung, Bapak
                  Albert Kampeusawang, Bapak Amos Pertama, Bapak Ernest
                  Bukanaung dan Bapak Aser Mosed. Desa Tateli Weru terus
                  menunjukkan perkembangannya baik dalam hal pembangunan fisik
                  (sarana dan prasarana) maupun dalam kehidupan sosial
                  masyarakat.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SejarahDesa;
