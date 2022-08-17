import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css'

export const CartasPersonajes = (props) => {
  return (
      <Card style={{ width: '18rem',  }}>
      <Card.Body className='fondo'>
        <Card.Title className='titulo'>{props.nombre}</Card.Title>
      </Card.Body>
      <Card.Img variant="top" src={props.imagen} />
      <ListGroup className="list-group-flush texto-carta">
        <ListGroup.Item><strong>Altura: </strong>{props.altura} Cm</ListGroup.Item>
        <ListGroup.Item><strong>Masa: </strong>{props.masa} Kg</ListGroup.Item>
        <ListGroup.Item><strong>Color De Pelo: </strong>{props.pelo}</ListGroup.Item>
        <ListGroup.Item><strong>Color De Piel: </strong>{props.piel}</ListGroup.Item>
        <ListGroup.Item><strong>Color De Ojos: </strong>{props.ojos}</ListGroup.Item>
        <ListGroup.Item><strong>Cumpleaños: </strong>{props.cumpleaños}</ListGroup.Item>
        <ListGroup.Item><strong>Genero: </strong>{props.genero}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <center><a className='btn btn-white btn-animate m-2'>Mas Información</a></center>
      </Card.Body>            
    </Card>
  
  )
}
