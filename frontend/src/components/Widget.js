import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Widget() {
  return (
    <div className="cover">
      <Container className="category-widget text-center">
        <h2 className="category-title">Explore Categories</h2>
        <Row className="category-squares justify-content-center">
          {["Tech", "Fashion", "Sports", "Beauty", "Toys"].map(
            (category, index) => (
              <Col
                key={index}
                xs={6}
                sm={4}
                md={3}
                lg={2}
                className="category-square"
              >
                <div className="icon-placeholder"></div>
                <span>{category}</span>
              </Col>
            )
          )}
        </Row>
      </Container>

      {/* Inline CSS Styling */}
      <style jsx>{`
        .cover {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        .category-title {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 20px;
        }

        .category-squares {
          gap: 15px;
        }

        .category-square {
          background-color: #f1f1f1;
          border-radius: 10px;
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
          margin-bottom: 15px;
        }

        .category-square:hover {
          transform: translateY(-5px);
          background-color: #e0e0e0;
        }

        .icon-placeholder {
          background-color: #bbb;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .category-square span {
          font-size: 0.9rem;
          color: #555;
        }
      `}</style>
    </div>
  );
}

export default Widget;
