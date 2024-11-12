import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Product() {
  return (
    <section className="card-section">
      <Container>
        <h2 className="section-title text-center mb-4">Our Products</h2>
        <Row>
          {[...Array(4)].map((_, idx) => (
            <Col md={6} lg={3} key={idx} className="mb-4">
              <Card className="product-card h-100">
                <Card.Img
                  variant="top"
                  src={`https://via.placeholder.com/150?text=Product+${
                    idx + 1
                  }`}
                  className="product-image"
                />
                <Card.Body>
                  <Card.Title className="product-title">
                    Product {idx + 1}
                  </Card.Title>
                  <Card.Text className="product-description">
                    A brief description of Product {idx + 1}. This product is
                    highly rated and loved by customers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Inline CSS Styling */}
      <style jsx>{`
        .card-section {
          padding: 40px 0;
          background-color: #f8f9fa;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }

        .product-card {
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          border-radius: 10px;
          overflow: hidden;
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        .product-image {
          border-radius: 10px 10px 0 0;
          height: 150px;
          object-fit: cover;
        }

        .product-title {
          font-size: 1.25rem;
          color: #333;
          font-weight: 600;
        }

        .product-description {
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
    </section>
  );
}

export default Product;
