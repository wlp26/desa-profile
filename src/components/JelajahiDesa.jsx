import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBook, FaChartLine, FaNewspaper, FaImage } from "react-icons/fa";
import "../css/JelajahiDesa.css";
import { Link } from "react-router-dom";

const scrollToGallery = () => {
  const isMobile = window.innerWidth <= 768;
  const offset = isMobile ? 50 : 100;
  const gallerySection = document.getElementById("gallery-section");
  window.scrollTo({
    behavior: "smooth",
    top: gallerySection.offsetTop - offset,
  });
};

const JelajahiDesaSection = () => {
  return (
    <section className="jelajahi-desa-section">
      <Container>
        <Row className="justify-content-center">
          {/* Text Section */}
          <Col xs={12} md={5} className="text-section">
            <h2 className="jelajahi-title">JELAJAHI DESA</h2>
            <p className="section-description">
              Melalui website ini Anda dapat menjelajahi segala hal yang terkait
              dengan desa. Aspek pemerintahan, penduduk, demografi, potensi
              desa, dan juga berita tentang desa.
            </p>
          </Col>

          {/* Card Section */}
          <Col xs={12} md={5}>
            <Row xs={2} sm={2} md={2} className="g-4">
              <Col xs={6} sm={6} md={6}>
                <Link to="/profil" className="text-decoration-none">
                  <Card className="jelajahi-card">
                    <Card.Body className="text-center">
                      <FaBook size={50} className="card-icon" />
                      <h5>PROFIL DESA</h5>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col xs={6} sm={6} md={6}>
                <Link to="/infografis" className="text-decoration-none">
                  <Card className="jelajahi-card">
                    <Card.Body className="text-center">
                      <FaChartLine size={50} className="card-icon" />
                      <h5>INFOGRAFIS</h5>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col xs={6} sm={6} md={6}>
                <Link to="/berita" className="text-decoration-none">
                  <Card className="jelajahi-card">
                    <Card.Body className="text-center">
                      <FaNewspaper size={50} className="card-icon" />
                      <h5>BERITA</h5>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col xs={6} sm={6} md={6}>
                <Link to="/gallery" className="text-decoration-none">
                  <Card className="jelajahi-card">
                    <Card.Body className="text-center">
                      <FaImage size={50} className="card-icon" />
                      <h5>GALERI</h5>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JelajahiDesaSection;
