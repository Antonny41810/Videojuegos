import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardApp = (props) => {
  return (
      <Card style={{ width: '22rem' }} className='d-flex m-4'>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.texto}
        </Card.Text>
      </Card.Body>
      <Button variant="success">Mas Informacion</Button>
    </Card>
      
    
  );
}

export default CardApp;