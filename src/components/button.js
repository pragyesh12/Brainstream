import React from 'react';
import { Button } from 'react-bootstrap'
const Buttonn = (props) =>(
    <Button variant="secondary" style={{padding:'8px 50px 8px 50px',background:'white',color:'black',borderRadius:'20px'}}> {props.data} </Button>
)
export default Buttonn;