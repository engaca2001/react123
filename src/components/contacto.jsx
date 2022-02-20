import React from 'react'

import { Contacto } from  '../models/contacto.class';
import EstadoConectado from './estado';

const ContactoComponent = () => {

  const defaultContacto = new Contacto('José', 'Palomares', "josePalomares@gmail.com", true);

  return (
    <div>
      
      <h2> { defaultContacto.nombre }</h2>
      <h2> { defaultContacto.apellido }</h2>
      <h2> { defaultContacto.email }</h2>
      <h2> { defaultContacto.conectado }</h2>

      <EstadoConectado contacto = {defaultContacto}></EstadoConectado>
    </div>
  )
}



export default ContactoComponent;
