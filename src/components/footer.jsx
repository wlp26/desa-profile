import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../css/FooterSection.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          <Col xs={12} md={5} className="footer-column">
            <h5>Desa Tatelu Weru</h5>
            <p>adsankflaskfjasasdsa</p>
            <p>
              afsamfklasfklasfmsaklflaskfjlkasj fklasjfklasfjklasljfalsjf kasjfa
            </p>
            <p>Provinsi Kalimantan Timur, 75385</p>
          </Col>

          <Col xs={12} md={4} className="footer-column">
            <h5>Hubungi Kami</h5>
            <p>
              <FaPhone /> 08122612637
            </p>
            <p>
              <FaEnvelope /> tatelu@gmail.com
            </p>
          </Col>

          <Col xs={12} md={3} className="footer-column">
            <h5>Nomor Telepon Penting</h5>
            <p>qiueiqweuwq</p>
            <p>qweiwqueiwqu</p>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col xs={12} className="footer-bottom-content">
            <p>© 2025 Powered by blablabla</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
