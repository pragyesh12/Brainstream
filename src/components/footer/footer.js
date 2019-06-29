import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import Fologin from './fologin'
const Footer = () => (
  <Container fluid={true} className="footer">
    <Row className="footer-row">
      <Col xl="2">
        <h2>Product</h2>
        <p>Dummy</p>
        <p>Dummy</p>
        <p>Dummy</p>
        <p>Dummy</p>
      </Col>
      <Col xl="2">
        <h2>Client</h2>
        <p>Dummy</p>
        <p>Dummy</p>
        <p>Dummy</p>
        <p>Dummy</p>
      </Col>
      <Col xl="2" className="footer-col">
        <h2>Help</h2>
        <p>Dummy</p>
        <p>Dummy</p>
        <p>Dummy</p>
        <p>Dummy</p>
      </Col>
      <Col>
      <Fologin />
      </Col>
    </Row>
  </Container>
);

export default Footer;
