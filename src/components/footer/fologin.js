import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Buttonn from "../button";
const Fologin = () => (
  <Container>
    <Col>
      <Row>
        <Col>
          {" "}
          <h4 style={{ marginLeft: "40%" }}>NewsLetter</h4>
        </Col>
      </Row>
      <Row className="footer-r">
        <Col>
          <input
            type="email"
            placeholder="provide email"
            style={{
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              background: "black",
              padding:'0 40px 5px 5px'
            }}
          />
        </Col>
        <Col>
          <input
            type="password"
            placeholder="password"
            style={{
              border: "none",
              color: "white",
              borderBottom: "1px solid white",
              background: "black",
              padding:'0 40px 5px 5px'
              
            }}
          />
        </Col>
      </Row>
    </Col>
    <Row>
      <Col style={{margin:'30px 0 0 40%'}}>
        <Buttonn data="signin" />
      </Col>
    </Row>
  </Container>
);

export default Fologin;
