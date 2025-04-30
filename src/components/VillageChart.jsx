import React from "react";
import "../css/VillageChart.css"; // Import the CSS for styling
import bagan from "../assets/bagan.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";

const VillageChart = () => {
  return (
    <section className="village-chart py-5">
      <Container>
        <h2 className="section-title">Bagan Desa</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <div>
              <img
                src={bagan} // Replace with the correct path to your image
                alt="Bagan Desa"
                className="chart-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VillageChart;
