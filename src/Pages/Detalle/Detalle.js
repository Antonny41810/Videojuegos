import { useEffect } from "react";
import { UsePerson } from "../../Hooks/UsePerson";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import image from "../../Assets/Img/fondop.jpg";
import Card from "react-bootstrap/Card";
import "./style.css";

export const Detalle = () => {
  const { back, getAllPerson, Contador, dataPeople } = UsePerson();

  const params = useParams();

  const listParams = [params];

  const m = listParams.map((list) => list.name);

  var nombre = m[0];

  useEffect(() => {
    getAllPerson(Contador);
  }, [dataPeople]);

  const filtro = dataPeople.filter((detalle) => detalle.name === nombre);
  console.log(filtro);

  return (
    <div>
      <button className="btn btn-white btn-animate m-2 atras" onClick={back}>
        Atras
      </button>
      <br></br>
      <h1 className="titulo">Detalles Personaje {params.name}</h1>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="imagen m-5">
          <img src={image} width="550" />
        </div>

        <div className="items">
          {filtro.map((personaje) => (
            <div key={personaje.name}>
              <ListGroup.Item>
                <strong>Altura: </strong>
                {personaje.height} Cm
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Masa: </strong>
                {personaje.mass} Kg
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Color De Pelo: </strong>
                {personaje.hair_color}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Color De Piel: </strong>
                {personaje.skin_color}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Color De Ojos: </strong>
                {personaje.eye_color}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Cumpleaños: </strong>
                {personaje.birth_year}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Genero: </strong>
                {personaje.gender}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Creado: </strong>
                {personaje.created}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Editado: </strong>
                {personaje.edited}
              </ListGroup.Item>
            </div>
          ))}
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="trajet m-4">
          {filtro.map((personaje) => (
            <div key={personaje.name}>
              <Card>
                <Card.Header>Peliculas</Card.Header>
                <Card.Body>
                  <Card.Text>{personaje.films}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <div className="trajet m-4">
          {filtro.map((personaje) => (
            <div key={personaje.name}>
              <Card>
                <Card.Header>Vehiculos</Card.Header>
                <Card.Body>
                  <Card.Text>{personaje.vehicles}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <div className="trajet m-4">
          {filtro.map((personaje) => (
            <div key={personaje.name}>
              <Card>
                <Card.Header>Planetas</Card.Header>
                <Card.Body>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
