import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section className="about-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h2 className="about-title text-center mb-4">About Lychee Shop</h2>
            <p className="about-text">
              Welcome to Lychee Shop, your number one source for quality
              products at affordable prices. Since our founding in 2023, we have
              been committed to providing a diverse range of products that cater
              to the needs and preferences of our customers.
            </p>
            <p className="about-text">
              At Lychee Shop, we believe that shopping should be easy,
              accessible, and enjoyable for everyone. Our team works tirelessly
              to bring you the best deals, top-notch customer service, and an
              ever-evolving selection of items across various categories.
            </p>
            <p className="about-text">
              Thank you for choosing Lychee Shop as your go-to destination. We
              are dedicated to building a lasting relationship with our
              customers and are here to support you in every step of your
              shopping journey.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Inline CSS Styling */}
      <style jsx>{`
        .about-section {
          background-color: #f9f9f9;
        }

        .about-title {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }

        .about-text {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
}

export default About;
