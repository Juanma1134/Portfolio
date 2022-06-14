import React from 'react'
import Infopersonal from'../Imagenes/Infopersonal.JPG';
import Curriculum from '../Imagenes/CVjuanmanuel.pdf';

const DescripcionPersonal = () => {
  return (
    <div className='ContenedorDosColumnas' >
        <div>
        <img className='FotoPersonal'
            src={Infopersonal}
            alt="Foto Personal"
        />

    </div>
    <div> 
      
      <ul className='Lista'>
        <h2>Descripcion Personal</h2>
        <p>Nombres: Juan Manuel</p>
        <p>Apellidos: Luzardo Bonjour</p>
        <p>Fecha de Nacimiento: 17 de mayo de 1993</p>
        <p>Estado Civil: Soltero</p>
        <p>Concuvinato</p>
        <p>Celular: 098754462</p>
        <p>Correo Electrónico: juanmanuelluzardo@gmail.com</p>
        <button className='Botones' id='Formacion'>
          <a href={Curriculum} target="_blank" rel="noopener noreferrer" download="Cjuanmanuel.pdf"> 
          Descargar Curriculum 
          </a>
        </button>
      </ul>  
    </div>
    </div>
  )
 
}

export default DescripcionPersonal