import React from 'react'
import Card from 'react-bootstrap/Card';
import './style.css'

export const CartasPersonajes = () => {
  return (
      <Card>
      <Card.Body>
        <Card.Title>Personaje</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Hola
        </Card.Text>
        <center><a className='btn button'>Mas Informacion</a></center>
      </Card.Body>
    </Card>
  
  )
}
