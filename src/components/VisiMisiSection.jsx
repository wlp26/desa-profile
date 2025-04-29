import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaEye, FaFlagCheckered } from "react-icons/fa";
import "../css/VisiMisiSection.css";

const VisiMisiSection = () => {
  return (
    <section className="visi-misi-section-visi">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5} className="mb-4">
            <Card className="card-visi">
              <Card.Body className="card-body-visi text-center">
                <div className="d-flex-visi justify-content-center align-items-center mb-2">
                  {/* <FaEye size={40} className="icon-spacing text-primary" /> */}
                  <h4 className="card-title-visi text-primary">Visi & Misi</h4>
                </div>
                <p className="card-text-visi">
                  1. Membangun desa tanpa korupsi.
                </p>
                <p className="card-text-visi">
                  2. Mewujudkan pembangunan di setiap bidang untuk menuju desa
                  mandiri.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={5} className="mb-4">
            <Card className="card-visi">
              <Card.Body className="card-body-visi text-center">
                <div className="d-flex-visi justify-content-center align-items-center mb-2">
                  {/* <FaFlagCheckered
                    size={40}
                    className="icon-spacing text-success"
                  /> */}
                  <h4 className="card-title-visi text-success">
                    Trisakti Desa
                  </h4>
                </div>
                <p className="card-text-visi">
                  1. Berdedikasi di bidang ekonomi.
                </p>
                <p className="card-text-visi">
                  2. Berkepribadian di bidang budaya.
                </p>
                <p className="card-text-visi">
                  3. Berdaulat di bidang politik.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VisiMisiSection;
