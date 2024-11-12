import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col
            className="text-center py-3 "
            bg-color="navy"
            color="white"
            padding-top="5px"
            padding-bottom="5px"
          >
            Copyright &copy; Lychee Shop
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
