import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaClock, FaHome } from "react-icons/fa";
import "../css/FooterSection.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          <Col xs={12} md={4} className="footer-column">
            <h5>Desa Tateli Weru</h5>
            <p>Kecamatan Mandolang</p>
            <p>Kabupaten Minahasa</p>
            <p>Provinsi Sulawesi Utara, 95661</p>
          </Col>

          <Col xs={12} md={4} className="footer-column">
            <h5>Kontak Desa</h5>
            <p>
              <FaPhone /> +62 852-5627-1776
            </p>
            <p>
              <FaClock /> Senin - Jumat (08.00 - 15.00)
            </p>
            <p>
              <FaHome /> Kantor Desa Tateli Weru
            </p>
          </Col>

          <Col xs={12} md={4} className="footer-column">
            <h5>Nomor Telepon Penting</h5>
            <p>
              <FaPhone /> +62 887‑0459‑8855 Aser (Kades Tateli Weru)
            </p>
            <p>
              <FaPhone /> +62 852-5627-1776 Devie (Sekdes Tateli Weru)
            </p>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col xs={12} className="footer-bottom-content">
            <p>© 2025 Powered by Wendy Paath</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
