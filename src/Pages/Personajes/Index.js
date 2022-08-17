import React, { useEffect } from "react";
import { UsePerson } from "../../Hooks/UsePerson";
import { CartasPersonajes } from "./CartasPersonajes";
import image from "../../Assets/Img/fondop.jpg";
import "./style.css";
//import { BsFillArrowRight, BsFillArrowLeft } from "react-icons/bs";

export const PersonajesApp = () => {
  const { getAllPerson, dataPeople, Contador, disminuir, aumentar } =
    UsePerson();

  useEffect(() => {
    getAllPerson(Contador);
    console.log(dataPeople);
  }, [dataPeople]);

  return (
    <div>
      <h1 className="titulo">Personajes</h1>
      <div className="d-flex justify-content-center flex-wrap">
        {dataPeople.map((people) => {
          return (
            <CartasPersonajes
              key={people.name}
              imagen={image}
              nombre={people.name}
              altura={people.height}
              masa={people.mass}
              pelo={people.hair_color}
              piel={people.skin_color}
              ojos={people.eye_color}
              cumpleaños={people.birth_year}
              genero={people.gender}
            />
          );
        })}
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <button className="btn btn-white btn-animate m-5" onClick={disminuir}>
          Atras
        </button>
        <h1 className="titulo m-5">Pagina {Contador}</h1>
        <button className="btn btn-white btn-animate m-5" onClick={aumentar}>
          Siguente
        </button>
      </div>
    </div>
  );
};
