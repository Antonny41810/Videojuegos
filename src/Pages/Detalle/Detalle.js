import { useEffect } from "react";
import { UsePerson } from "../../Hooks/UsePerson";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import image from "../../Assets/Img/fondop.jpg";
import Card from "react-bootstrap/Card";
import "./style.css";
import { UsePlanet } from "../../Hooks/UsePlanet";

export const Detalle = () => {
  const { back, getAllPerson, Contador, dataPeople } = UsePerson();

  const { detailPlanet, dataPlanetPerson } = UsePlanet();

  const params = useParams();

  const listParams = [params];

  const m = listParams.map((list) => list.name);

  var nombre = m[0];

  useEffect(() => {
    getAllPerson(Contador);
  }, [dataPeople]);

  const filtrar = dataPeople.filter((detalle) => detalle.name === nombre);


  const mapeo = filtrar.map((world) => world.homeworld);
  var homeworld = mapeo[0];
  detailPlanet(homeworld);


  return (
    <div>
      <button className="btn btn-white btn-animate m-2 atras" onClick={back}>
        Atras
      </button>
      <br></br>
      <h1 className="titulo">Detalles Personaje {params.name}</h1>
      <div className="container d-flex justify-content-center align-items-center flex-wrap">
     
          <img src={image} width="550" />
       

        <div className="items m-5">
          {filtrar.map((personaje) => (
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

      <div className="container d-flex justify-content-center align-items-center flex-wrap">
        <div className="trajet m-4">
          {filtrar.map((personaje) => (
            <div key={personaje.name}>
              <Card style={{ width: "18rem", margin: "0" }}>
                <Card.Header>Peliculas</Card.Header>
                <Card.Body>
                  <Card.Text>{personaje.films}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <div className="trajet m-4">
          {filtrar.map((personaje) => (
            <div key={personaje.name}>
              <Card style={{ width: "18rem", margin: "0" }}>
                <Card.Header>Vehiculos</Card.Header>
                <Card.Body>
                  <Card.Text>{personaje.vehicles}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <div className="trajet m-4">
        {dataPlanetPerson?.length > 0 && (
              <Card style={{ width: "18rem" }}>
                <Card.Header>Planeta Nativo</Card.Header>
                <Card.Body>
                  <Card.Text>{dataPlanetPerson[0].name}</Card.Text>
                </Card.Body>
              </Card>
               )}
            </div>          
        </div>
      </div>
  );
};
