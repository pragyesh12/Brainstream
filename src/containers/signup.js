import React from "react";
import { Container, Row, Col, InputGroup,Form, FormControl } from "react-bootstrap";
import Buttonn from "../components/button";
import {Link} from 'react-router-dom'
const Signup = () => (
  <Container >
    <Row style={{padding:'10px'}}>
      <Col>Signup Using</Col>
    </Row>
    <Row style={{padding:'10px'}}>
      <Col>
        <Buttonn data="facebook" />
      </Col>
      <Col>
        <Buttonn data="google" />
      </Col>
    </Row>
    <Row style={{padding:'10px'}}>
      <Col>or Create Account</Col>
    </Row>
    <Row style={{padding:'10px'}}>
      <Col>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Col>
    </Row> 
    <Row style={{padding:'10px'}}>
      <Col>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Col>
    </Row>
    <Row style={{padding:'10px'}}>
      <Col>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="password"
            aria-label="passworld"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Col>
    </Row>
    <Row style={{padding:'10px'}}>
        <Col>
        Already have account?<Link>SignIn</Link>
        </Col>
    </Row>
    <Row style={{padding:'10px'}}>
        <Col>
        <Form.Group>
          <Form.Check
            required
            label="By Creating A/c I agree to the Brainstream Terms of Service and Privacy Policy"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        </Col>
    </Row>
    <Row style={{padding:'10px'}}>
        <Col>
        <Buttonn data="Signup" />
        </Col>
    </Row>
  </Container>
);
export default Signup;
