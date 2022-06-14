import React from 'react'
import Programador from '../Imagenes/Programador.jpg';
const Academico = () => {
  return (
    <div className='ContenedorDosColumnas' id='Academico'> 
      <div>
        <img className='Programador'
            src={Programador}
            alt="Foto del Portfolio"
        />

    </div>
      <ul className='Lista'>
          <h2>Formacion Academica</h2>
        <ul>
            <h5></h5>
            <li>Ciclo Básico- Liceo numero 1 Juan Lacaze </li>
            <li>Bachillerato Humanistico, Liceo 2 Juan Lacaze</li>
        </ul>    
        <ul>
            <h5>Programación</h5>
            <li>Estudiante en carrera Analista Programador Instituto Ctc Rosario</li>
         
        </ul> 
        <ul>
            <h5>Formacion Anterior</h5>
            <li>Tecnico en gerencia Instituto Ctc Rosario "sin culminar"</li>
            <li>Ingles basico Alianza Cultural Juan Lacaze</li>
            <li>Gestion de ventas Brindado por Specialized LatinAmerica</li>
        </ul> 
      </ul>  
    </div>
  )
}

export default Academico;