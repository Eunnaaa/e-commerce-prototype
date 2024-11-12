import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Timeline() {
  return (
    <section className="timeline-section py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <h1 className="timeline-title mb-3">
              Our Journey - From Idea to Store
            </h1>
            <p className="timeline-content">
              Established in 2023, Lychee Shop started with a simple goal - to
              deliver quality products at affordable prices. Follow our timeline
              to see how we grew into a beloved e-commerce store for everyone!
            </p>
          </Col>
        </Row>
      </Container>

      {/* Inline CSS Styling */}
      <style jsx>{`
        .timeline-section {
          background-color: #f0f4f8;
          padding: 20px 0;
        }

        .timeline-title {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }

        .timeline-content {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}

export default Timeline;
