import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const CartasPlanetas = (props) => {
  return (
    <Card style={{ width: '18rem',  }}>
    <Card.Body className='fondo'>
      <Card.Title className='titulo'>{props.nombre}</Card.Title>
    </Card.Body>
    <Card.Img variant="top" src={props.imagen} />
    <ListGroup className="list-group-flush texto-carta">
      <ListGroup.Item><strong>Periodo De Rotacion: </strong>{props.rotacion} </ListGroup.Item>
      <ListGroup.Item><strong>Periodo Orbital: </strong>{props.orbital}</ListGroup.Item>
      <ListGroup.Item><strong>Diametro: </strong>{props.diametro}</ListGroup.Item>
      <ListGroup.Item><strong>Climatizado: </strong>{props.climatizado}</ListGroup.Item>
      <ListGroup.Item><strong>Gravedad: </strong>{props.gravedad}</ListGroup.Item>
      <ListGroup.Item><strong>Terreno: </strong>{props.terreno}</ListGroup.Item>
      <ListGroup.Item><strong>Agua Superficial: </strong>{props.agua}</ListGroup.Item>
      <ListGroup.Item><strong>Poblacion: </strong>{props.poblacion}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
    <center><a className='btn btn-white btn-animate m-2'>Mas Información</a></center>
    </Card.Body>            
  </Card>
  )
}
