import React, { useState } from 'react'

export const UsePlanet = () => {

    const [dataPlanet, setDataPlanet] = useState([])

    const [Contador, setContador] = useState(1);
 
  const disminuir = () => {
    if (Contador <= 1) {
      setContador(1);
    } else {
      setContador(Contador - 1);
    }
  };
  const aumentar = () => {
    setContador(Contador + 1);
  };

const getAllPlanet = async (numberPage) => {
  try{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      await fetch(
        `https://swapi.dev/api/planets/?page=${numberPage}`, 
        requestOptions
        )
        .then(response => response.json())
        .then(result => setDataPlanet(result.results))
        .catch(error => console.log('error', error));
      }
      catch(error){
        console.log(error);
      }
};

  return {
      getAllPlanet,
      dataPlanet,
      disminuir,
      aumentar,
      Contador
  };
};
