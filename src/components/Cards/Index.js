import React from 'react';
import { CardsApp } from './Cartas';
import ima1 from '../../Assets/Img/yoda.jpg';
import ima2 from '../../Assets/Img/c-3po.png';
import ima3 from '../../Assets/Img/ahzoka.jpg';


export const Card = () => {
    const cartas =[
        {
            id: 1,
            title: "YODA",
            texto: "Yoda es un personaje ficticio del universo de Star Wars, era uno de los más renombrados y poderosos maestros Jedi durante toda la historia de la Galaxia, y uno de los pocos Jedis de la República Galáctica en sobrevivir hasta la Guerra Civil Galáctica.",
            image: ima1,
          },
          {
            id: 2,
            title: "C-3PO",
            texto: "C-3PO es un personaje ficticio del universo de la Guerra de las Galaxias. Se trata de un androide, diseñado para el servicio de los humanos para llevar a cabo dichas tareas, para lo que domina seis millones de formas de comunicación.",
            image: ima2,
          },
          {
            id: 3,
            title: "AHZOKA TANO",
            texto: "Ahsoka Tano es un personaje de la franquicia Star Wars. Presentada como la Padawan Jedi de Anakin Skywalker, es un personaje secundario en la película animada de 2008 Star Wars: The Clone Wars y la serie de televisión posterior.",
            image: ima3,
          }, 
    ]
  return (
    <div className='d-flex justify-content-center flex-wrap'>
        {cartas.map((carta) => {
        return <CardsApp key={carta.id} title={carta.title} texto={carta.texto} image={carta.image}></CardsApp>;
      })}
    </div>
  )
}
