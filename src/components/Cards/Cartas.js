import React from 'react'
import Card from 'react-bootstrap/Card';
import './style.css';

export const CardsApp = (props) => {
  return (
    <Card>
    <Card.Img variant="top" src={props.image}/>
    <Card.Body>
      <Card.Title className='titulo'>{props.title}</Card.Title>
      <Card.Text>
       {props.texto}
      </Card.Text>
    </Card.Body>
    <center><a className='btn btn-white btn-animate m-3'>Mas Información</a></center>
  </Card>
  )
}
