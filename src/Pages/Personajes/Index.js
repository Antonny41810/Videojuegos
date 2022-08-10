import React, { useEffect } from 'react';
import { UsePerson } from '../../Hooks/UsePerson';
import { CartasPersonajes } from './CartasPersonajes';

export const PersonajesApp = () => {
  const {getAllPerson} = UsePerson();

  useEffect(() => {
    getAllPerson();
    console.log(getAllPerson());
  }, []);
  
  return (
    <div>
    <CartasPersonajes/>
    </div>
  )
};
