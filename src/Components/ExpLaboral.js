import React from 'react'
import Experiencia from'../Imagenes/Experiencia.JPG';

const ExpLaboral = () => {
  return (
    <div className='ContenedorDosColumnas' id='ExpLaboral'>
        <div>
        <img className='ExpLaboral'
            src={Experiencia}
            alt="Foto del Portfolio"
        />

    </div>
      <ul className='Lista'>
      <h2>Experiencia Laboral</h2>
        <ul>
            <h5>Actualmente soy encargado de LuzardoNeumaticos, desde el año 2016.</h5>
            <li>Ventas</li>
            <li>Atencion al publico</li>
            <li>Compras</li>
            <li>Gestion de provedores</li>
            <li>Pagos</li>
            <li>Sueldos</li>
            <li>Cunetas</li>
        </ul>    
      </ul>  
    </div>
  )
}

export default ExpLaboral