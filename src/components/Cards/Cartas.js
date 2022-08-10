import React from 'react'
import Card from 'react-bootstrap/Card';
import './style.css';

export const CardsApp = (props) => {
  return (
    <Card>
    <Card.Img variant="top" src={props.image}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
       {props.texto}
      </Card.Text>
    </Card.Body>
    <center><a className='btn button'>Mas Informacion</a></center>
  </Card>
  )
}
