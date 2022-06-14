import React from 'react'
import Descripcion from'../Imagenes/Descripcion.JPG'

const InfoPersonal = () => {
  return (
    <div className='ContenedorDosColumnas' id='InfoPersonal'> 
    <div>
        <img className='FotoPersonal'
            src={Descripcion}
            alt="Foto Personal"
        />

    </div>
    <div>
      <ul className='Lista'>
        <h3>Informacion Personal</h3>
        <p>Desde el cominezo de la pandemia decidi estudiar la carrera analista programador, dado que es un mundo que me atrapa y me encontre con tiempo disponible</p>
        <p>Actualmente trabajo en la empresa familiar, enfocada a la prestacion y venta de servicios para vehiculos, desde hace ya 8 años</p>
        <p id='InfoPersonal'>Hoy en dia me encuentro enfocado en la programacion con esperanzas de poder insertarme en el mundo laboral y crecer en lo porfecional</p>
      </ul>  
    </div>
    </div>
  )
}

export default InfoPersonal;