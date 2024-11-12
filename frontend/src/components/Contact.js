import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Contact() {
  return (
    <section className="contact-section py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <h2 className="contact-title mb-3">Contact Customer Service</h2>
            <p className="contact-text mb-4">
              Have questions? Our customer service team is here to assist you.
              Choose one of the options below to get in touch:
            </p>
            <div className="contact-buttons">
              <Button
                variant="primary"
                href="tel:+1234567890"
                className="contact-btn mb-2"
              >
                Call & Chat
              </Button>
              <Button
                variant="secondary"
                href="mailto:support@lycheeshop.com"
                className="contact-btn"
              >
                Email Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Inline CSS Styling */}
      <style jsx>{`
        .contact-section {
          background-color: #f8f9fa;
          padding: 40px 0;
        }

        .contact-title {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }

        .contact-text {
          font-size: 1rem;
          color: #555;
        }

        .contact-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-btn {
          width: 100%;
          max-width: 200px;
          padding: 10px 20px;
          font-size: 1rem;
        }

        .contact-btn + .contact-btn {
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
}

export default Contact;
