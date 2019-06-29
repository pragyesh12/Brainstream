import React, { Component } from 'react'
import {Container,Row,Col,Image, Button} from 'react-bootstrap'
import { createBrowserHistory } from 'history';
import {withRouter,Router} from 'react-router'
 class MyCart extends Component {
    handleClick(){
        const history = createBrowserHistory();
        console.log(history)
        Router.push('/',{some:'state'})
    }
    render() {
       
        return (
            <Container fluid="true" style={{margin:'1% 0 10% 0'}}> 
                <Row>
                    <Col>
                    <h3>Mycart</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                    <p>Items</p>
                    </Col>
                    <Col lg="1">
                        <p>Qunatity</p>
                    </Col>
                    <Col lg="2" lg={{offset:1}}>
                        Price
                    </Col>
                </Row>
                <Row>
                   <Col><hr /></Col>
                    </Row>
                    <Row>
                        <Col lg="2">
                        <Image src="https://cdn.shopify.com/s/files/1/0613/9353/products/UCM4-Product-2.jpg?v=1476916514" fluid />
                        </Col>
                        <Col lg="1">
                        <h3>Headset</h3>
                        </Col>
                        <Col  lg={{offset:3}} >
                        <Col style={{display:'flex',flexDirection:'row'}}>
                        <button style={{border:'none',borderRadius:'50%',marginRight:'10px'}}>+</button>
                        <p style={{padding:'3px 31px 3px 31px',border:'1px solid grey'}}>1</p>
                        <button style={{border:'none',borderRadius:'50%',marginLeft:'10px'}}>-</button>
                        </Col>
                        </Col>
                        <Col>
                        <p>$150</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="2" lg={{offset:10}}>
                        <p>Remove</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col  lg="2" lg={{offset:10}}>
                        <Button onClick={()=>(this.handleClick())} style={{color:'black', border:'none',borderRadius:'20px',background:'grey',padding:'7px',margin:'0 0 10px 0'}} >Proceed to check out</Button>
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default withRouter(MyCart)