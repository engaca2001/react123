import React from 'react'
import PropTypes from 'prop-types'
import  { useState } from 'react';

const EstadoConectado = ({ contacto })=>  {

    const [conectado, setEstado] = useState(contacto.conectado);

    const cambiaEstado = () => {
        
        if (contacto.conectado) contacto.conectado = false;
        else contacto.conectado = true;
        setEstado(contacto.conectado);
    }

    if (contacto.conectado) 
  return (
    <div>
       <p>Conectado </p>
        <button onClick={cambiaEstado}>Desconectar</button>
    </div>
  )
  else
    return (
        <div>
            <p> No conectado </p>
            <button onClick={cambiaEstado}>Conectar</button>
        </div>
    )
}

EstadoConectado.propTypes = {}

export default EstadoConectado;
