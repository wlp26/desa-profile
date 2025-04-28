import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaEye, FaFlagCheckered } from "react-icons/fa";
import "../css/VisiMisiSection.css";

const VisiMisiSection = () => {
  return (
    <section className="visi-misi-section">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5} className="mb-4">
            <Card className="border-light rounded-lg">
              <Card.Body className=" text-center">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <FaEye size={40} className="icon-spacing text-primary" />
                  <h4 className="card-title text-primary">Visi</h4>
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  scelerisque, metus in egestas tempor, leo nulla consequat
                  augue, eget dictum nunc lorem ac quam. Nulla malesuada urna ac
                  mi luctus, ut cursus leo auctor.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={5} className="mb-4">
            <Card className="border-light rounded-lg">
              <Card.Body className=" text-center">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <FaFlagCheckered
                    size={40}
                    className="icon-spacing text-success"
                  />
                  <h4 className="card-title text-success">Misi</h4>
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vehicula, velit et auctor euismod, urna purus auctor
                  est, non volutpat sem neque sit amet felis. Nam tristique
                  velit magna, sed dictum augue.
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
