import React from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => (
  <Container fluid={true} className='header'>
    <Row>
        <Col className="header-col1" xl="7"> Brainstream </Col>
          <Col xl="1"><Link className="header-col2" to='/'> Home </Link></Col>
          <Col xl="1"><Link  className="header-col2" to='/support'> support </Link></Col>
          <Col xl="1"><Link  className="header-col2" to='/live'> Live </Link></Col>
          <Col xl="1"><Link className="header-col2" to='/signup'> signup </Link></Col>
          <Col xl="1"><Link  className="header-col2" to='mycart'> Cart </Link></Col>
    </Row>
  </Container>
)

export default Header;