import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Card1 from '../Assets/Img/fifa.jpg'

function CardApp() {
  return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Card1}/>
      <Card.Body>
        <Card.Title>FIFA 22</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Mas Informacion</Button>
      </Card.Body>
    </Card>
      
    
  );
}

export default CardApp;