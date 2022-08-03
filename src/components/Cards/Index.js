import React, { useState } from 'react';
import ima1 from '../../Assets/Img/cod.jpeg';
import ima2 from '../../Assets/Img/fifa.jpg';
import ima3 from '../../Assets/Img/gta-v.jpg';
import CardApp from './Cartas';

const Index = () => {
  const cards =[
    {
      id: 1,
      title: "FIFA 2022",
      texto: "FIFA 22 es un videojuego desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo.",
      image: ima2,
    },
    {
      id: 2,
      title: "GTA V",
      texto: "Grand Theft Auto V (abreviado como GTA V o GTA 5) es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.",
      image: ima3,
    },
    {
      id: 3,
      title: "CALL OF DUTY",
      texto: "Call of Duty (en español: «La llamada del deber») es una serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision.",
      image: ima1,
    },

  ]
  return (
    <div className='m-0 d-flex justify-content-center'>
      {cards.map((card) => {
        return <CardApp key={card.id} title={card.title} texto={card.texto} image={card.image}></CardApp>;
      })}
    </div>
  )
}

export default Index;