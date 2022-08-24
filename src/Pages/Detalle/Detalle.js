import { useEffect } from "react";
import { UsePerson } from "../../Hooks/UsePerson";
import { useParams } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import image from '../../Assets/Img/fondop.jpg'

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
      <div>
        <button className="btn btn-white btn-animate m-2" onClick={back}>
          Atras
        </button>
      </div>
      <h1 className="titulo">Detalles Personaje {params.name}</h1>
      <div className="content">
      <img src={image}></img>
      </div>
     

      {filtro.map((personaje) => (
        <div key={personaje.name}>
          <ListGroup.Item><strong>Altura: </strong>{personaje.height} Cm</ListGroup.Item>
        <ListGroup.Item><strong>Masa: </strong>{personaje.mass} Kg</ListGroup.Item>
        <ListGroup.Item><strong>Color De Pelo: </strong>{personaje.hair_color}</ListGroup.Item>
        <ListGroup.Item><strong>Color De Piel: </strong>{personaje.skin_color}</ListGroup.Item>
        <ListGroup.Item><strong>Color De Ojos: </strong>{personaje.eye_color}</ListGroup.Item>
        <ListGroup.Item><strong>Cumpleaños: </strong>{personaje.birth_year}</ListGroup.Item>
        <ListGroup.Item><strong>Genero: </strong>{personaje.gender}</ListGroup.Item>
        </div>
      ))}
    </div>
  );
};
