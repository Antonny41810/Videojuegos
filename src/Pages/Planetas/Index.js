import React, { useEffect } from "react";
import { UsePlanet } from "../../Hooks/UsePlanet";
import { CartasPlanetas } from "./CartasPlanetas";
import image from "../../Assets/Img/fondopa.jpg";

export const PlanetasApp = () => {
  const { getAllPlanet, dataPlanet, Contador, disminuir, aumentar } =
    UsePlanet();

  useEffect(() => {
    getAllPlanet(Contador);
    console.log(dataPlanet);
  }, [dataPlanet]);

  return (
    <div>
      <h1 className="titulo">Planetas</h1>
      <div className="d-flex justify-content-center flex-wrap">
        {dataPlanet.map((planet) => {
          return (
            <CartasPlanetas
              key={planet.name}
              imagen={image}
              nombre={planet.name}
              rotacion={planet.rotation_period}
              orbital={planet.orbital_period}
              diametro={planet.diameter}
              climatizado={planet.climate}
              gravedad={planet.gravity}
              terreno={planet.terrain}
              agua={planet.surface_water}
              poblacion={planet.population}
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
